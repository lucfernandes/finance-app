interface TransactionItemProps {
  title: string;
  value: number;
  date: string;
}

export default function TransactionItem({
  title,
  date,
  value,
}: TransactionItemProps) {
  // Formata o valor para a moeda brasileira
  const valueFormated = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);

  return (
    <div className="flex flex-col py-3 px-2 border-b">
      <div className="flex justify-between">
        <p className="font-normal">{title}</p>
        <p className="font-normal">{valueFormated}</p>
      </div>
      <p className="text-sm">{date}</p>
    </div>
  );
}
