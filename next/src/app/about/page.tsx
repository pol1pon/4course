import Counter from "./Counter";

// src/app/about/page.tsx
async function getInfo() {
    return {
        title: 'О проекте',
        description: 'Данные получены на сервере без useEffect.'
    };
}

export default async function AboutPage() {
    const info = await getInfo();
    return (
        <main>
            <h1>{info.title}</h1>
            <p>{info.description}</p>
            <Counter/>
        </main>
    );
}