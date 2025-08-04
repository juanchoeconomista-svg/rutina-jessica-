
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const days = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

const routine = {
  "Lunes": ["Press de pecho (3x12)", "Elevaciones laterales (2x15)", "Fondos en banco (2x12)", "Plancha abdominal (3x30s)", "Vóley"],
  "Martes": ["Sentadilla libre (3x12)", "Peso muerto rumano (3x15)", "Hip thrust (2x15)", "Crunch (3x15)", "Stretching", "Yoga"],
  "Miércoles": ["Circuito funcional (2 rondas)", "Plancha lateral (2x20s)", "Calistenia", "Vóley"],
  "Jueves": ["Jalón al pecho (3x12)", "Remo mancuerna (3x12)", "Curl bíceps (2x15)", "Elevaciones piernas (3x12)", "Stretching", "Yoga"],
  "Viernes": ["Prensa (3x15)", "Curl femoral (3x12)", "Abducción cadera (2x15)", "Pallof press (2x12)", "Vóley"],
  "Sábado": ["Sentadilla goblet (2x15)", "Press hombros (2x15)", "Face-pull (2x15)", "Plancha lateral + rotación (2x10)", "Movilidad"],
  "Domingo": ["Cardio suave (30 min)", "Estiramientos"]
};

export default function RutinaJessica() {
  const [checked, setChecked] = useState({});
  const [progress, setProgress] = useState(0);

  const totalItems = Object.values(routine).reduce((sum, day) => sum + day.length, 0);

  useEffect(() => {
    const completed = Object.values(checked).filter(Boolean).length;
    setProgress(Math.round((completed / totalItems) * 100));
  }, [checked]);

  const toggleCheck = (day, index) => {
    const key = `${day}-${index}`;
    setChecked((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const resetProgress = () => {
    setChecked({});
  };

  return (
    <div className="p-4 grid gap-4">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Progreso semanal: {progress}%</h1>
        <Button variant="destructive" onClick={resetProgress}>
          Reiniciar semana
        </Button>
      </div>
      {days.map((day) => (
        <Card key={day} className="bg-white shadow-md">
          <CardContent>
            <h2 className="text-xl font-bold mb-2">{day}</h2>
            <ul className="space-y-2">
              {routine[day].map((item, index) => {
                const key = `${day}-${index}`;
                return (
                  <li
                    key={key}
                    className={`flex items-center justify-between px-2 py-1 border rounded ${checked[key] ? "line-through text-gray-400" : ""}`}
                  >
                    {item}
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => toggleCheck(day, index)}
                    >
                      {checked[key] ? "✔" : "Marcar"}
                    </Button>
                  </li>
                );
              })}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
