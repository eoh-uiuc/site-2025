import { useState } from "react";

const useMapModal = () => {
    const [modalImages, setModalImages] = useState([]);

    const openModal = async (buildingCode) => {
        let images = ["/assets/images/default_image.png"];

        if (buildingCode === "Sidney Lu") {
        images = [
            "/assets/maps/sidney lu0.png",
            "/assets/maps/sidney lu1.png",
            "/assets/maps/sidney lu2.png",
        ];
        } else {
            const floor1Url = `/assets/maps/${buildingCode.toLowerCase()}1.png`;
            const floor2Url = `/assets/maps/${buildingCode.toLowerCase()}2.png`;
            try {
                const res1 = await fetch(floor1Url, { method: "HEAD" });
                if (res1.ok) {
                try {
                    const res2 = await fetch(floor2Url, { method: "HEAD" });
                    if (res2.ok) {
                        images = [floor1Url, floor2Url];
                    } else {
                        images = [floor1Url];
                    }
                } catch {
                    images = [floor1Url];
                }
                }
            } catch {
                // Do nothing
            }
        }

        setModalImages(images);
    };

    const closeModal = () => {
        setModalImages([]);
    };

    return { modalImages, openModal, closeModal };
    };

export default useMapModal;