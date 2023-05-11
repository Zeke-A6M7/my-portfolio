import PageDescription from "@/components/PageDescription";
import { Button, Grid, Chip, Stack } from "@mui/material";
import { useRouter } from "next/router";

export default function About({skills})
{
    const router = useRouter();
    return (
        <section>
            <PageDescription
                title="About Me"
                description="Welcome to our Software Development About Page! We are a dynamic team of passionate software engineers dedicated to crafting exceptional digital solutions. With a blend of technical expertise, creativity, and a customer-centric approach, we strive to deliver innovative software that addresses the unique needs of our clients."/>
            <Grid container spacing={2}>
                <Grid item md={6}>
                    <h2>Hello World</h2>

                    <p>
                    As a software engineer, my passion lies in creating innovative and efficient solutions to complex problems through the power of code. I thrive in the world of technology, constantly seeking new challenges and opportunities to expand my knowledge and skills. Whether Im designing and developing robust applications, optimizing performance, or collaborating with cross-functional teams, I am driven by a relentless pursuit of excellence.
                    </p>
                    <p>With a strong foundation in programming languages such as Java, Python, and C++, I possess a deep understanding of software development principles and best practices. I leverage my expertise to analyze requirements, architect scalable systems, and write clean, maintainable code that not only meets the needs of end-users but also adheres to industry standards. Beyond technical proficiency, I excel in communication and teamwork, actively engaging with stakeholders to gather feedback, provide updates, and ensure alignment throughout the development lifecycle.</p>
                    <Button 
                        variant="contained"
                        size="large"
                        onClick={() => router.push("/contact")}>
                        Contact</Button>
                </Grid>
                <Grid item md={6}>
                    <h2>My Skills</h2>  
                    <Stack direction="row" spacing={2} useFlexGap flexWrap="wrap">
                        {skills.map( skill => <Chip key={skill} label={skill} /> )}
                    </Stack>

                </Grid>
            </Grid>
        </section>
    );
}

export async function getStaticProps(){
    let skills = []
    try
    {
        const response = await fetch("https://skills-api-e9a70-default-rtdb.firebaseio.com/skills.json");
        const data = await response.json();
        skills = data.split(",");
    }catch(err){

    }
    return {
        props: 
        {
            skills,
        },
        revalidate: 10,
    };
}