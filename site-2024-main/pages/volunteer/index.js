import React, { useState, useEffect } from "react";
import { auth, provider, firestore, signInWithPopup, signOut, collection, getDocs, doc, updateDoc, arrayUnion } from "/utilities/firebase";

export default function Volunteer() {
  const [user, setUser] = useState(null);
  const [volunteerEvents, setVolunteerEvents] = useState([]);
  const [requiredEventsSignedUp, setRequiredEventsSignedUp] = useState(false);

  useEffect(() => {
    // Check if user is signed in
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      setUser(firebaseUser);
    });

    // Fetch volunteer events from Firestore
    const fetchVolunteerEvents = async () => {
      const eventsRef = collection(firestore, "volunteerEvents");
      const snapshot = await getDocs(eventsRef);
      const events = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setVolunteerEvents(events);
    };

    fetchVolunteerEvents();
    return () => unsubscribe();
  }, []);

  // Sign in with Google
  const handleSignIn = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  // Sign out
  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  // Check if user is already signed up for an event
  const isUserSignedUp = (event) => {
    return event.volunteers?.some((volunteer) => volunteer.uid === user?.uid);
  };

  // Check if user is signed up for one of the required events (Thursday Set Up, Thursday Set Up 2, Saturday Tear Down, Saturday Tear Down 2)
  const isRequiredEventSignedUp = () => {
    const requiredEvents = ["Thursday Set Up", "Thursday Set Up 2", "Saturday Tear Down", "Saturday Tear Down 2"];
    return volunteerEvents.some((event) => requiredEvents.includes(event.name) && isUserSignedUp(event));
  };

  // Handle signing up or unsigning up
  const handleSignUpOrUnsignUp = async (event) => {
    if (!user) {
      alert("Please sign in to volunteer.");
      return;
    }

    // Ensure user is signed up for one of the required events before signing up for other events
    if (!isRequiredEventSignedUp() && !["Thursday Set Up", "Thursday Set Up 2", "Saturday Tear Down", "Saturday Tear Down 2"].includes(event.name)) {
      alert("You must sign up for one of the required events Thursday Set Up, Thursday Set Up 2, Saturday Tear Down, Saturday Tear Down 2 before signing up for other events.");
      return;
    }

    const eventId = event.id;
    const eventRef = doc(firestore, "volunteerEvents", eventId);

    try {
      let updatedVolunteers = [...(event.volunteers || [])];

      // Check if user is already signed up
      if (isUserSignedUp(event)) {
        // Remove user from volunteers
        updatedVolunteers = updatedVolunteers.filter((volunteer) => volunteer.uid !== user.uid);
      } else {
        // Check if maximum capacity is reached
        if (event.maxCapacity && event.volunteers.length >= event.maxCapacity) {
          alert("Sorry, this event is already full.");
          return;
        }

        // Add user to volunteers
        updatedVolunteers.push({
          uid: user.uid,
          name: user.displayName || "",
          email: user.email || "",
        });
      }

      // Update Firestore
      await updateDoc(eventRef, { volunteers: updatedVolunteers });

      // Update state immediately
      setVolunteerEvents((prevEvents) =>
        prevEvents.map((e) => (e.id === eventId ? { ...e, volunteers: updatedVolunteers } : e))
      );

      // If user signed up for any required event, update state
      if (!requiredEventsSignedUp) {
        setRequiredEventsSignedUp(isRequiredEventSignedUp());
      }
    } catch (error) {
      console.error("Error signing up/unsigning up for event:", error);
      alert("Check with hospitality directors first!");
    }
  };

  return (
    <div className="w-screen mt-32 mb-16 flex justify-center items-center flex-col overflow-y-scroll">
      <h1 className="font-bold text-3xl">Volunteer Sign Up</h1>
      <br />
      {user ? (
        <div className="w-7/12">
          <h1 className="flex items-center gap-1">
            Welcome {user.displayName ? user.displayName.split(' ')[0] : user.email.split('@')[0]}
            <button onClick={handleSignOut} className="underline text-600 hover:text-blue-800">
              (Sign Out)
            </button>
          </h1>
          <div className="font-montserrat">
            Please sign up for a shift at EOH 2025! We need all the help we can get to make this event a success. We will be in contact with you as the event approaches to give you more information about your shift. Thank you for your interest in volunteering!
          </div>

          <div className="flex flex-wrap gap-8">
            {/* Volunteering Guide */}
            <div className="flex-1 mt-8 p-4 border rounded shadow text-center">
              <h2 className="font-bold text-lg">Volunteering Guide</h2>
              <p>Check out the volunteer guide for Frequently Asked Questions!</p>
              <a
                href="https://docs.google.com/document/d/1bAC8b2-VK7Y-jxBrhISY9rC_hndycAWxqviNPZNY3ik/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block px-4 py-2 bg-[#ff8400] text-white rounded"
              >
                Guide
              </a>
            </div>

            {/* Slack Invite Section */}
            <div className="flex-1 mt-8 p-4 border rounded shadow text-center">
              <h2 className="font-bold text-lg">Join Our Volunteering Slack Channel</h2>
              <p>Stay updated and connect with other volunteers on Slack.</p>
              <a
                href="https://join.slack.com/t/eohvolunteeri-vec8800/shared_invite/zt-301htu91v-1aXOcbbJMOKwAtdu_KehxA"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block px-4 py-2 bg-[#ff8400] text-white rounded"
              >
                Join Slack
              </a>
            </div>
          </div>

          {/* Display Events in Two Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {volunteerEvents.map((event) => (
              <div key={event.id} className="p-4 border rounded shadow text-center">
                <h2 className="font-bold text-lg">{event.name}</h2>
                {event.description && <p>Description: {event.description}</p>}
                {event.time && <p>Time: {event.time}</p>}
                <p>Volunteers: {event.volunteers?.length || 0} / {event.maxCapacity || "N/A"}</p>
                <button
                  onClick={() => handleSignUpOrUnsignUp(event)}
                  className={`mt-2 px-4 py-2 ${isUserSignedUp(event) ? 'bg-[#a2d3c2] hover:bg-[#8fb8a8]' : 'bg-[#c578d6] hover:bg-[#a864b3]'} text-white rounded`}
                >
                  {isUserSignedUp(event) ? 'Unsign Up' : 'Sign Up'}
                </button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="relative">
          <p className="text-center">Please sign in to volunteer</p>
          <button onClick={handleSignIn} className="mt-4 px-4 py-2 bg-green-500 text-white rounded">
            Sign In with Google
          </button>
        </div>
      )}
    </div>
  );
}
