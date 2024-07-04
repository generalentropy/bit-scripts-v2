import Card from "./Card";

function CardsWrapper() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex max-w-[1280px] flex-wrap justify-center gap-8 p-8">
        <Card /> <Card /> <Card /> <Card />
        <Card /> <Card /> <Card /> <Card />
      </div>
    </div>
  );
}

export default CardsWrapper;
