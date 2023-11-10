import { Link } from "react-router-dom";


const SectionCard = ({ section }) => {
    const { id, food_name, food_image, food_category, price } = section;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={food_image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{ food_name}</h2>
                <p>{food_category}</p>
                <p>Peice: { price}</p>
                <div className="card-actions">
                    <Link>
                        <button className="btn btn-primary">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SectionCard;