import TransactionItem from "./transaction-item";

export default function TransactionsList() {
  return (
    <div className="transaction-list">
      <p className="font-medium">Transações:</p>
      <div className="flex flex-col">
        <TransactionItem title="Restaurante" value={-100.0} date="14-09-2024" />
        <TransactionItem
          title="Posto de gasolina"
          value={-150.5}
          date="14-09-2024"
        />
        <TransactionItem title="Ifood" value={-50} date="14-09-2024" />
        <TransactionItem title="Amazon" value={-500.95} date="14-09-2024" />
        {Array(10)
          .fill(null)
          .map((_, index) => (
            <TransactionItem
              key={index}
              title={`Transaction ${index + 1}`}
              value={Math.random() * 100}
              date="14-09-2024"
            />
          ))}
      </div>
    </div>
  );
}
