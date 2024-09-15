export default function Balance() {
  const balanceValue = -1000;
  const balanceValueFormated = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(balanceValue);

  return (
    <div className="pt-4 px-4 mb-4 relative z-10">
      <div className="flex justify-between rounded-xl w-full bg-sky-700 text-white p-4">
        <p className="font-normal text-lg">Saldo atual</p>
        <p className="font-medium text-2xl">{balanceValueFormated}</p>
      </div>
      {balanceValue < 0 && (
        <div className="balance-badge">Seu saldo está negativo</div>
      )}
    </div>
  );
}
