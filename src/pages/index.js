import { useRouter } from "next/router";
import {Button} from "@mui/material"
import styles from "../styles/Home.module.css"

export default function Home({name, summary}){
  const router = useRouter();
  return(
    <section className={styles.Home}>
      <h1 className={styles.Name}>{name}</h1>
      <div className={styles.Summary}>{summary}</div>
      <div>
        <Button variant="contained" size="large" onClick={() => router.push("/projects")}>
          Projects
        </Button>
      </div>
    </section>
  );
}

export async function getStaticProps(){
  console.log("Running on the server");
  // Get data from an API
  return {
    props: {
      name: "John Doe",
      summary: "my summary"
    }
  }
}