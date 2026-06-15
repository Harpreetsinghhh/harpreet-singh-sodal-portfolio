import { useState, useRef } from "react";

export default function MusicPopup() {
  const [showPopup, setShowPopup] = useState(true);
  const audioRef = useRef(null);

  const continueWithMusic = async () => {
    try {
      await audioRef.current.play();
    } catch (err) {
      console.log(err);
    }

    setShowPopup(false);
  };

  const continueWithoutMusic = () => {
    setShowPopup(false);
  };

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/audio/background.mp3" type="audio/mpeg" />
      </audio>

      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md">
          <div className="w-[90%] max-w-md rounded-2xl border border-white/10 bg-neutral-900 p-8 text-center">
            <h2 className="mb-3 text-2xl font-semibold text-white">
              Welcome
            </h2>

            <p className="mb-8 text-sm text-gray-400">
              This experience includes ambient background audio.
              Would you like to continue with sound?
            </p>

            <div className="flex gap-4">
              <button
                onClick={continueWithMusic}
                className="flex-1 rounded-lg border border-white/10 bg-white px-4 py-3 text-black transition hover:opacity-90"
              >
                Continue with Music
              </button>

              <button
                onClick={continueWithoutMusic}
                className="flex-1 rounded-lg border border-white/10 px-4 py-3 text-white transition hover:bg-white/10"
              >
                Continue Silent
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}