import { useRouter } from "next/router";

const CardDetail = ({ data }) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      {data?.map(({ title, count }, index) => {
        return (
          <div
            key={index}
            className="flex w-full justify-between text-base font-normal cursor-pointer hover:text-[#46A358] transition-colors  "
          >
            <h2>{title}</h2>
            <span>({count})</span>
          </div>
        );
      })}
      <h1>Card ID: {id}</h1>
      <p>Bu yerda {id} kartochkasi haqida ma'lumot bo‘ladi.</p>
    </div>
  );
};

export default CardDetail;
