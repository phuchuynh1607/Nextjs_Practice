import Button from "./Button.jsx";
function Card({ title = "Default", buttonText = "Check it out", imageurl }) {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-xl mt-8 shadow overflow-hidden transition-shadow">
      <img
        className="w-full h-48 object-cover"
        src={imageurl}
        alt="Example Image"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <p className="text-gray-600 text-sm mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quod.
        </p>
        <Button buttonText={buttonText} />
      </div>
    </div>
  );
}
export default Card;
