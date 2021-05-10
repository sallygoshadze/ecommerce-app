import { useParams } from "react-router";

type Props = { title?: string };

const SingleItem = () => {
  const { title } = useParams<Props>();
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

export default SingleItem;
