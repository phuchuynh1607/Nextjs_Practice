import "./App.css";
import { useState } from "react";
import QueueForm from "./components/QueueForm.jsx";
import QueueDisplay from "./components/QueueDisplay.jsx";
export default function App() {
  const [queue, setQueue] = useState([]);
  const addtoQueue = (customer) => {
    setQueue([...queue, { ...customer, id: Date.now(), status: "waiting" }]);
  };
  const updateStatus = (id, newStatus) => {
    setQueue(
      queue.map((customer) =>
        customer.id === id ? { ...customer, status: newStatus } : customer,
      ),
    );
  };
  const removeFromQueue = (id) => {
    setQueue(queue.filter((customer) => customer.id !== id));
  };
  return (
    <div className="app">
      <header>
        <h1>Queue Management App</h1>
        <p>Manage your customers efficiently</p>
      </header>
      <main>
        <QueueForm onAdd={addtoQueue} />
        <QueueDisplay
          queue={queue}
          onUpdateStatus={updateStatus}
          onRemoveFromQueue={removeFromQueue}
        />
      </main>
    </div>
  );
}
