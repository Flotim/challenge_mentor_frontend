import React from "react";

interface CardProps {
    icon: React.ReactNode;     // Icône ou image dans la carte
    className?: string;
    bgcolor?: string;
    description?: string;
    title?: string;    // Classes supplémentaires
    categorie?: string;
}

const Card: React.FC<CardProps> = ({
    description,
    title,
    icon,
    className = "",
    bgcolor = "",
    categorie = "",
}) => {
    return (
        <div className={`relative flex flex-col items-end pr-3 xl:h-[230px] xl:w-[210px] h-[150px] w-[310px] rounded-2xl hover:-translate-y-1 transition duration-450 ease-in-out ${bgcolor} ${className}`}>
            {icon}
            <div className="absolute flex flex-col bottom-0 p-6 right-0 h-5/6 w-full bg-[var(--dark-blue)] hover:bg-[var(--desaturated-blue)] transition duration-450 ease-in-out rounded-xl gap-4">
                <div className="text-[#BBC0FF] flex flex-row justify-between items-center ">
                    <h3 className="text-white text-sm">{categorie}</h3>
                    <svg className="hover:scale-110 hover:cursor-pointer hover:text-white transition duration-150 ease-in-out " width="21" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="currentColor" fill-rule="evenodd" /></svg>
                </div>
                <div className="flex xl:flex-col xl:justify-start xl:items-start justify-between items-center gap-5">
                    <h1 className="text-white text-5xl font-extralight ">{title}</h1>
                    <p className="text-[var(--pale-blue)] text-xs xl:text-sm">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;
