    'use client'
    import React, { useState } from 'react';
    import './calendar.css'

    const CalendarComponent = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [currYear, setCurrYear] = useState(selectedDate.getFullYear());
    const [currMonth, setCurrMonth] = useState(selectedDate.getMonth());

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    const renderCalendar = () => {
        const firstDayOfMonth = new Date(currYear, currMonth, 1).getDay();
        const lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate();
        const lastDayOfMonth = new Date(currYear, currMonth, lastDateOfMonth).getDay();
        const lastDateOfLastMonth = new Date(currYear, currMonth, 0).getDate();

        let liTag = "";

        for (let i = firstDayOfMonth; i > 0; i--) {
        liTag += `<li class="inactive">${lastDateOfLastMonth - i + 1}</li>`;
        }

        for (let i = 1; i <= lastDateOfMonth; i++) {
        const isActive = i === selectedDate.getDate() && currMonth === selectedDate.getMonth() && currYear === selectedDate.getFullYear();
        liTag += `<li class="${isActive ? 'active' : ''}" data-day="${i}">${i}</li>`;
        }

        for (let i = lastDayOfMonth; i < 6; i++) {
        liTag += `<li class="inactive">${i - lastDayOfMonth + 1}</li>`;
        }

        return (
        <>
            <p className="current-date">{months[currMonth]} {currYear}</p>

            <ul className="days">
            {liTag}
            </ul>

            <div className="todays-meal">
            <p className="todays-header">Todays Meal Plan:</p>
            <ul className="meal-list">
                <li>- Nasi + Tumis Tahu Brokoli</li>
                <li>- Salad Sayur + Jus Buah Naga</li>
                <li>- Nasi + Ayam Jamur Teriyaki</li>
                <li>-</li>
                <li>-</li>
                <li>-</li>
            </ul>
            </div>
        </>
        );
    };

    const handlePrevNextClick = (id) => {
        let newMonth = currMonth;
        if (id === "prev") {
        newMonth--;
        } else {
        newMonth++;
        }

        if (newMonth < 0) {
        newMonth = 11;
        setCurrYear(currYear - 1);
        } else if (newMonth > 11) {
        newMonth = 0;
        setCurrYear(currYear + 1);
        }

        setCurrMonth(newMonth);
        setSelectedDate(new Date(currYear, newMonth, selectedDate.getDate()));
        renderCalendar();
    };

    return (
        <div className="calendar">
        <div className="calendar-header">
            <span id="prev" className="material-symbols-rounded" onClick={() => handlePrevNextClick("prev")}>chevron_left</span>
            <span id="next" className="material-symbols-rounded" onClick={() => handlePrevNextClick("next")}>chevron_right</span>
        </div>

        {renderCalendar()}
        </div>
    );
    };

    export default CalendarComponent;