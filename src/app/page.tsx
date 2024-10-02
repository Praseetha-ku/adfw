import Image from "next/image";
import styles from "./page.module.css";
import { CgProfile } from "react-icons/cg";
import Header from "@/components/header/Header";
import Index from "@/components/header/section1";
// import Section from "@/components/header/section2";



export default function Home() {
  return (
 <div>
  <Header/>
<Index/>
{/* <Section/> */}
</div>
);
}
