import Image from "next/image";
import Cdd from "../../../public/static/cddProfile.jpeg";
import Ion from "../../../public/static/ionProfile.jpeg";
import Vincent from "../../../public/static/vincentProfile.png";
import Link from "next/link";

export default function Page() {
  return (
    <div className={"h-full overflow-auto max-h-fit"}>
      <p className={"font-mono text-4xl text-center"}>Developer</p>
      <Link
        href={"https://github.com/devcdd/hip_zip"}
        className={"flex justify-center"}
      >
        <Image
          src={Cdd}
          alt={"개발자한테 사진 넣으라고 말해주세요"}
          className={"rounded-full m-10 cursor-pointer"}
          width={300}
          height={300}
        />
      </Link>
      <div className={"border-2 border-sky-500 p-5"}>
        <p className={"font-mono text-xl text-center"}>
          CDD (Front-End Developer)
        </p>
        <p className={"font-mono text-xl text-center"}>DB structure,</p>
        <p className={"font-mono text-xl text-center"}>Service Planning</p>
      </div>
      <p className={"font-mono mt-10 font-sans text-4xl text-center"}>
        Contribute
      </p>
      <div className={"grid grid-cols-1 lg:grid-cols-2 gap-10"}>
        <div>
          <Link href={"https://www.instagram.com/ion0323/"}>
            <Image
              src={Ion}
              alt={"개발자한테 사진 넣으라고 말해주세요"}
              className={"rounded-full m-10 cursor-pointer"}
              width={300}
              height={300}
            />
          </Link>
          <div className={"mt-10 border-2 border-sky-500 p-5"}>
            <p className={"font-mono text-xl text-center"}>ION</p>
            <p className={"font-mono text-xl text-center"}>
              Initial Data Providing
            </p>
          </div>
        </div>
        <div>
          <Link href={"https://www.instagram.com/neo_viincent/"}>
            <Image
              src={Vincent}
              alt={"개발자한테 사진 넣으라고 말해주세요"}
              className={"rounded-full m-10 cursor-pointer"}
              width={300}
              height={300}
            />
          </Link>
          <div className={"mt-10 border-2 border-sky-500 p-5"}>
            <p className={"font-mono text-xl text-center"}>Neo Vicnent</p>
            <p className={"font-mono text-xl text-center"}>
              Icon Design Provider
            </p>
          </div>
        </div>
      </div>
      <p className={"font-mono mt-10 font-sans text-4xl text-center"}>
        Contact
      </p>
      <div className={"mt-10 border-2 border-sky-500 p-5"}>
        <p className={"font-mono text-xl text-center"}>E-Mail</p>
        <p className={"font-mono text-xl text-center"}>
          developer.cdd@gmail.com
        </p>
      </div>
    </div>
  );
}
