"use client";

export default function AddTransaction() {
  function addDefaultDate(dateType: "today" | "yesterday") {
    const date = new Date();

    // define the value o "date" input to today's date
    const dateInput = document.getElementById("date") as HTMLInputElement;
    if (dateType === "today") {
      dateInput.value = date.toISOString().split("T")[0];
    } else if (dateType === "yesterday") {
      date.setDate(date.getDate() - 1);
      dateInput.value = date.toISOString().split("T")[0];
    }
  }

  return (
    <div className="h-full container mx-auto">
      <div className="h-full flex flex-col">
        <h1 className="p-4 text-2xl font-semibold text-white">
          Adicionar transação
        </h1>
        <div className="flex-1 flex flex-col bg-zinc-50 rounded-t-xl p-4">
          <form action="" method="post" className="flex flex-col gap-4">
            <div className="flex flex-col">
              <label htmlFor="value" className="font-medium">
                Digite o valor:
              </label>
              <input
                type="string"
                name="value"
                id="value"
                className="m-0 border rounded-md p-2"
                placeholder="1234,56"
              />
              <span className="text-zinc-600 text-sm italic">
                Exemplo: 1.234,56
              </span>
            </div>
            <div className="flex flex-col">
              <label htmlFor="title" className="font-medium">
                Titulo da transação:
              </label>
              <input
                type="text"
                name="title"
                id="title"
                className="m-0 border rounded-md p-2"
                placeholder="Restaurante, Alimentação, etc..."
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="date" className="font-medium">
                Data da transação:
              </label>
              <input
                type="date"
                name="date"
                id="date"
                className="m-0 border rounded-md p-2"
              />
              <p className="text-xs mt-1">
                (
                <a
                  href="javascript:;"
                  onClick={() => {
                    addDefaultDate("today");
                  }}
                >
                  Hoje
                </a>
                <span> | </span>
                <a
                  href="javascript:;"
                  onClick={() => {
                    addDefaultDate("yesterday");
                  }}
                >
                  Ontem
                </a>
                )
              </p>
            </div>
            <button
              type="submit"
              className="bg-sky-500 text-white rounded-lg py-4 px-2 text-center font-medium"
            >
              Criar transação
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
