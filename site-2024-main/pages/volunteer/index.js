import React, { useEffect } from "react"
import { useUser } from "@clerk/nextjs"
import SlotPicker from "./slotPicker"
import { SignIn } from "@clerk/nextjs"
export default function volunteer() {
  const { isLoaded, isSignedIn, user } = useUser()

  return (
    <div className="w-screen mt-32 mb-16 flex justify-center items-center flex-col overflow-y-scroll">
      <h1 className="font-bold text-3xl">Volunteer</h1> <br />
      {isLoaded && isSignedIn && (
        <div className=" w-7/12">
          <h1>Welcome {user.firstName}</h1>
          <div className="font-montserrat">
            Please sign up for a shift at EOH 2025! We need all the help we can
            get to make this event a success. We will be in contact with you as
            the event approaches to give you more information about your shift.
            Thank you for your interest in volunteering!
          </div>
          <div className="font-montserrat w-full text-center">
            <a
              // href="https://join.slack.com/t/eoh2024volunteers/shared_invite/zt-2fh5ftkts-WhB8Z3MSwf3yLGbsySgOQQ"
              // className="underline"
            >
              Volunteer Slack
            </a>
          </div>
          <SlotPicker />
        </div>
      )}
      {isLoaded && !isSignedIn && (
        <div className="relative ">
          <p className="text-center">Please sign in to volunteer</p>
          <SignIn />
        </div>
      )}
    </div>
  )
}
