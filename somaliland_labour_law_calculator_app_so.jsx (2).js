import * as React from "react";

export default function SomalilandLabourCalculator() {
  const [salary, setSalary] = React.useState("250");
  const [years, setYears] = React.useState("8");
  const [nightHours, setNightHours] = React.useState("0");
  const [holidayHours, setHolidayHours] = React.useState("0");
  const [fridayHours, setFridayHours] = React.useState("0");
  const [dayHours, setDayHours] = React.useState("0");

  const safeSalary = parseFloat(salary) || 0;
  const safeYears = parseFloat(years) || 0;
  const safeNightHours = parseFloat(nightHours) || 0;
  const safeHolidayHours = parseFloat(holidayHours) || 0;
  const safeFridayHours = parseFloat(fridayHours) || 0;
  const safeDayHours = parseFloat(dayHours) || 0;

  const hourlyRate = safeSalary > 0 ? safeSalary / 208 : 0;

  const nightPay = safeNightHours * hourlyRate * 1.5;
  const holidayPay = safeHolidayHours * hourlyRate * 2;
  const fridayPay = safeFridayHours * hourlyRate * 2;
  const dayPay = safeDayHours * hourlyRate * 1.25;

  const annualLeave = safeYears * safeSalary;
  const eidBonus = safeYears * (safeSalary / 2);
  const noticePay = safeSalary;

  const total =
    nightPay +
    holidayPay +
    fridayPay +
    dayPay +
    annualLeave +
    eidBonus +
    noticePay;

  const calculations = [
    {
      label: "Mushahar Saacaddii",
      formula: "Salary ÷ 208",
      law: "Xeerka Shaqaalaha: 48 saacadood toddobaadkii = 208 saacadood bishii",
      article: "Qodobka Saacadaha Shaqada",
      description:
        "Mushaharka saacaddii waxaa lagu helaa mushaharka bishii oo loo qaybiyo 208 saacadood.",
      value: hourlyRate,
    },
    {
      label: "Overtime Habeenkii",
      formula: "Hours × Hourly Rate × 1.5",
      law: "Shaqada dheeraadka habeenkii waxaa lagu bixiyaa lacag dheeraad ah.",
      article: "Qodobka Overtime",
      description:
        "Saacadaha habeenkii waxaa lagu dhuftaa 1.5x mushaharka saacaddii.",
      value: nightPay,
    },
    {
      label: "Holiday Overtime",
      formula: "Hours × Hourly Rate × 2",
      law: "Shaqada maalmaha fasaxa ah waxaa lagu bixiyaa labanlaab mushahar.",
      article: "Qodobka Fasaxyada Qaranka",
      description:
        "Holiday overtime waxaa lagu xisaabiyaa 2x mushaharka saacaddii.",
      value: holidayPay,
    },
    {
      label: "Friday Overtime",
      formula: "Hours × Hourly Rate × 2",
      law: "Shaqada Jimcaha ama maalinta nasashada waxaa lagu bixiyaa overtime gaar ah.",
      article: "Qodobka Nasashada Todobaadlaha",
      description:
        "Friday overtime waxaa lagu xisaabiyaa 2x mushaharka saacaddii.",
      value: fridayPay,
    },
    {
      label: "Overtime Maalintii",
      formula: "Hours × Hourly Rate × 1.25",
      law: "Shaqada dheeraadka maalintii waxay leedahay gunno dheeraad ah.",
      article: "Qodobka Overtime Maalintii",
      description:
        "Overtime maalintii waxaa lagu dhuftaa 1.25x mushaharka saacaddii.",
      value: dayPay,
    },
    {
      label: "Fasax Sanadeed",
      formula: "Years × Monthly Salary",
      law: "Shaqaaluhu wuxuu xaq u leeyahay fasax sanadeed mushahar leh.",
      article: "Qodobka Fasaxa Sanadlaha",
      description:
        "Sanad kasta shaqaaluhu wuxuu leeyahay fasax mushahar leh.",
      value: annualLeave,
    },
    {
      label: "Xaqal Ciid",
      formula: "Years × (Salary ÷ 2)",
      law: "Shaqaalaha waxaa la siiyaa gunno munaasabadeed.",
      article: "Qodobka Gunnada",
      description:
        "Xaqal ciid waxaa lagu xisaabiyaa nus mushahar sanadkii.",
      value: eidBonus,
    },
    {
      label: "Notice Pay",
      formula: "1 Month Salary",
      law: "Shaqaalaha waa in la siiyaa ogeysiis ama bedelkiisa mushahar.",
      article: "Qodobka Joojinta Shaqada",
      description:
        "Notice pay waa hal bil mushahar marka shaqada la joojinayo.",
      value: noticePay,
    },
  ];

  const formatMoney = (num) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 2,
    }).format(Number.isFinite(num) ? num : 0);
  };

  return (
    <>
      <div className="min-h-screen bg-slate-950 text-white p-4 md:p-8">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="bg-slate-900 rounded-3xl shadow-2xl p-6 border border-slate-800">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Somaliland Labour Law Calculator
              </h1>

              <p className="text-slate-400 text-sm md:text-base">
                Xisaabiyaha Xuquuqda Shaqaalaha Somaliland
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputCard
                title="Mushaharka Bishii ($)"
                value={salary}
                setValue={setSalary}
              />

              <InputCard
                title="Sanadaha Shaqada"
                value={years}
                setValue={setYears}
              />

              <InputCard
                title="Overtime Habeenkii"
                value={nightHours}
                setValue={setNightHours}
              />

              <InputCard
                title="Holiday Hours"
                value={holidayHours}
                setValue={setHolidayHours}
              />

              <InputCard
                title="Friday Hours"
                value={fridayHours}
                setValue={setFridayHours}
              />

              <InputCard
                title="Overtime Maalintii"
                value={dayHours}
                setValue={setDayHours}
              />
            </div>

            <div className="mt-8 bg-slate-800 rounded-2xl p-5">
              <h2 className="text-2xl font-bold mb-5 text-center">
                Natiijada Xisaabta
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {calculations.map((item) => (
                  <div
                    key={item.label}
                    className="bg-slate-900 rounded-2xl p-4 border border-slate-700"
                  >
                    <h3 className="text-lg font-bold text-green-400 mb-2">
                      {item.label}
                    </h3>

                    <p className="text-xs text-slate-400 mb-2">
                      Formula: {item.formula}
                    </p>

                    <p className="text-xs text-blue-300 mb-1 font-semibold">
                      {item.article}
                    </p>

                    <p className="text-xs text-slate-300 mb-2 leading-relaxed">
                      {item.law}
                    </p>

                    <p className="text-xs text-slate-500 mb-3 leading-relaxed italic">
                      {item.description}
                    </p>

                    <div className="text-2xl font-extrabold">
                      {formatMoney(item.value)}
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-slate-700 mt-6 pt-4 flex justify-between items-center">
                <span className="text-xl font-bold text-green-400">
                  Wadarta Guud
                </span>

                <span className="text-3xl font-extrabold text-green-400">
                  {formatMoney(total)}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-slate-950 rounded-2xl p-4 border border-slate-800">
            <h3 className="text-lg font-bold mb-3 text-green-400">
              Test Cases
            </h3>

            <ul className="space-y-2 text-sm text-slate-300 list-disc pl-5">
              <li>
                Salary = 250, Years = 8 → Notice Pay waa inuu noqdaa
                $250.00
              </li>

              <li>
                Salary = 208 → Mushahar saacaddii waa inuu noqdaa
                $1.00
              </li>

              <li>
                Holiday Hours = 10 → Holiday overtime waa inuu kordhaa
              </li>

              <li>
                Night Hours = 20 → Overtime Habeenkii waa inuu kordhaa
              </li>

              <li>
                Dhammaan fields haddii ay madhan yihiin → app-ku waa inuusan
                crash-garin
              </li>
            </ul>
          </div>

          <div className="text-xs text-slate-500 leading-relaxed space-y-2">
            <p>
              Qaacidooyinkan waxay ku salaysan yihiin Somaliland Labour Law /
              Xeerka Shaqaalaha.
            </p>

            <p>
              Overtime Habeenkii = 1.5x | Holiday & Friday = 2x |
              Overtime Maalintii = 1.25x
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

function InputCard({ title, value, setValue }) {
  return (
    <div className="bg-slate-800 rounded-2xl p-4">
      <label className="block text-sm mb-2 text-slate-300">
        {title}
      </label>

      <input
        type="number"
        min="0"
        step="any"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:ring-2 focus:ring-green-500"
      />
    </div>
  );
}
