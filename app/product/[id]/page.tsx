type Props = {
  params: { id: string };
};

export default async function ProductPage({ params: { id } }: Props) {
  return <p>Product {id}</p>;
}
