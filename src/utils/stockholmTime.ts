export interface StockholmStatus {
  isOpen: boolean;
  statusText: string;
  currentDay: number; // 0 = Sun, 1 = Mon, ..., 6 = Sat
}

export const STOCKHOLM_HOURS: Record<number, [number, number] | null> = {
  0: [10, 17], // Söndag 10:00–17:00
  1: null,     // Måndag: Stängt
  2: [10, 19], // Tisdag 10:00–19:00
  3: [10, 19], // Onsdag 10:00–19:00
  4: [10, 19], // Torsdag 10:00–19:00
  5: [10, 19], // Fredag 10:00–19:00
  6: [10, 17]  // Lördag 10:00–17:00
};

export const WEEKDAYS_SV = [
  { dayIndex: 1, name: 'Måndag', time: 'Stängt' },
  { dayIndex: 2, name: 'Tisdag', time: '10:00–19:00' },
  { dayIndex: 3, name: 'Onsdag', time: '10:00–19:00' },
  { dayIndex: 4, name: 'Torsdag', time: '10:00–19:00' },
  { dayIndex: 5, name: 'Fredag', time: '10:00–19:00' },
  { dayIndex: 6, name: 'Lördag', time: '10:00–17:00' },
  { dayIndex: 0, name: 'Söndag', time: '10:00–17:00' }
];

export function getStockholmStatus(): StockholmStatus {
  try {
    const parts = new Intl.DateTimeFormat('en-US', {
      timeZone: 'Europe/Stockholm',
      weekday: 'short',
      hour: 'numeric',
      minute: 'numeric',
      hour12: false
    }).formatToParts(new Date());

    const o: Record<string, string> = {};
    parts.forEach((p) => {
      o[p.type] = p.value;
    });

    const dayMap: Record<string, number> = {
      Sun: 0,
      Mon: 1,
      Tue: 2,
      Wed: 3,
      Thu: 4,
      Fri: 5,
      Sat: 6
    };

    const day = dayMap[o.weekday] ?? 0;
    const hour = parseInt(o.hour, 10) % 24;
    const minute = parseInt(o.minute, 10);
    const minutesNow = hour * 60 + minute;

    const todaySchedule = STOCKHOLM_HOURS[day];

    if (todaySchedule && minutesNow >= todaySchedule[0] * 60 && minutesNow < todaySchedule[1] * 60) {
      return {
        isOpen: true,
        statusText: `Öppet nu, stänger ${todaySchedule[1]}:00`,
        currentDay: day
      };
    }

    // Determine next opening day/time
    const DAYS_SV = ['söndag', 'måndag', 'tisdag', 'onsdag', 'torsdag', 'fredag', 'lördag'];
    const searchStart = todaySchedule && minutesNow < todaySchedule[0] * 60 ? 0 : 1;
    let nextMsg = 'Stängt';

    for (let i = searchStart; i <= 7; i++) {
      const nextDay = (day + i) % 7;
      const nextSchedule = STOCKHOLM_HOURS[nextDay];
      if (nextSchedule) {
        const dayLabel = i === 0 ? 'idag' : i === 1 ? 'imorgon' : DAYS_SV[nextDay];
        nextMsg = `Stängt, öppnar ${dayLabel} ${nextSchedule[0]}:00`;
        break;
      }
    }

    return {
      isOpen: false,
      statusText: nextMsg,
      currentDay: day
    };
  } catch {
    return {
      isOpen: false,
      statusText: 'Valhallavägen 120, Östermalm',
      currentDay: 2
    };
  }
}
