export type Train = {
  id: string;
  number: string;
  name: string;
  from: string;
  to: string;
  departure: string;
  arrival: string;
  duration: string;
  runningDays: string[];
  type: string;
};

export const trains: Train[] = [
  {
    id: "train-001",
    number: "12015",
    name: "Ajmer Shatabdi",
    from: "Delhi",
    to: "Ajmer",
    departure: "06:10 AM",
    arrival: "12:45 PM",
    duration: "6h 35m",
    runningDays: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    type: "Shatabdi",
  },

  {
    id: "train-002",
    number: "12915",
    name: "Ashram Express",
    from: "Delhi",
    to: "Ahmedabad",
    departure: "03:20 PM",
    arrival: "07:30 AM",
    duration: "16h 10m",
    runningDays: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    type: "Superfast",
  },

  {
    id: "train-003",
    number: "12414",
    name: "Pooja Express",
    from: "Delhi",
    to: "Ajmer",
    departure: "04:55 PM",
    arrival: "12:10 AM",
    duration: "7h 15m",
    runningDays: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    type: "Superfast",
  },
];