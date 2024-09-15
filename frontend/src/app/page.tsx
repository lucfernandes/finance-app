import Balance from "../components/balance";
import TransactionsList from "../components/transactions-list";

export default function Home() {
  return (
    <div className="h-full container mx-auto">
      <div className="h-full w-full flex flex-col">
        <Balance />
        <TransactionsList />
      </div>
    </div>
  );
}
