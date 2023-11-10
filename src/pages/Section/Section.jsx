import { useEffect, useState } from "react";
import SectionCard from "./SectionCard";


const Section = () => {
    const [sections, setSections] = useState([]);

    useEffect(() => {
        fetch('section.json')
            .then(res => res.json())
            .then(data => setSections(data));
    },[])
    return (
        <div className="mt-10">
            <div className="text-center">
                <h3 className="text-5xl">Top Food Section</h3>
            </div>
            <div className="grid grid-cols-3 gap-6">
                {
                    sections.map(section=><SectionCard key={section.id} section={section}></SectionCard>)
                }
            </div>
        </div>
    );
};

export default Section;