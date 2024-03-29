export default function About() {
    return (
        <>
            <div className={"relative h-screen ml-auto mr-auto max-w-[80ch] scroll-smooth p-2 bg-fixed bg-black bg-dot-white/[0.2]"}>
                <div className={"p-5 pt-10 flex flex-col justify-start"}>
                    <h1 className={"text-4xl font-bold text-white"}>About me ~ 🥀</h1>
                    <section className="pl-5">
                      <h2 className={"text-2xl pt-5 font-normal underline decoration-indigo-500 underline-offset-4 text-white"}><span> Basic Info</span></h2>
                        <p className="text-white pt-2 font-light text-wrap">Ayo! My real name is <span className="text-red-600">[ confidential ]</span> and i'm a dude with <span className="text-red-600">1[ removed ]</span> years old.
                            everyone calls me as Aelys because it was my username for years, i speak Portuguese and English, still learning Italian as i am from an Italian family.
                            I love to learn, i'm always trying to learn new things, i'm a self-taught developer and i'm always trying to improve my skills.
                            I'm pretty introverted and i don't like to talk much, but i'm always open to meet new people and make new friends.
                        </p>
                        <h2 className={"text-2xl pt-5 font-normal underline decoration-indigo-500 underline-offset-4 text-white"}><span>What i'm currently doing</span></h2>
                        <p className="text-white pt-2 font-light text-wrap"> Actually i am spending my time learning Golang and new frameworks to increase my stack power, plus i'm learning Godot and working on a football game called Touch - Top Down Esports, an online game with a competitive look. 
                        </p>                    </section>
                    
                </div>
            </div>
        </>
    );
}
