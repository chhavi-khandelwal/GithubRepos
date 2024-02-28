const getLastWeekDate = () => {
    const today = new Date();
    const lastWeek = new Date();
    lastWeek.setDate(today.getDate() - 7);
    const lastWeekMonth = lastWeek.getMonth() + 1;
    let lastWeekMonthInString = `${lastWeekMonth}`;
    if (lastWeekMonth < 10) {
        lastWeekMonthInString = `0${lastWeekMonthInString}`;
    }
    return `${lastWeek.getFullYear()}-${lastWeekMonthInString}-${lastWeek.getDate()}`;
};

export default getLastWeekDate;
