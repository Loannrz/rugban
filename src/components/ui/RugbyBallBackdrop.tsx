import Image from "next/image";

const RUGBY_BALL_BACKDROP = "/hero/rugby-ball-backdrop.png";

export function RugbyBallBackdrop() {
  return (
    <Image
      src={RUGBY_BALL_BACKDROP}
      alt=""
      width={328}
      height={269}
      priority
      aria-hidden
      className="hero-title__ball"
    />
  );
}
