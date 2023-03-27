import d3 from "d3";

export const rawData = [
    { startDate: "11/1/21", endDate: "10/31/22", encounterRate: .1537, group: "Kaspersky" },
    { startDate: "11/1/20", endDate: "10/31/21", encounterRate: .1545, group: "Kaspersky" },
    { startDate: "11/1/19", endDate: "10/31/20", encounterRate: .1018, group: "Kaspersky" },
    { startDate: "11/1/18", endDate: "10/31/19", encounterRate: .1980, group: "Kaspersky" },
    { startDate: "11/1/17", endDate: "10/31/18", encounterRate: .3001, group: "Kaspersky" },
    { startDate: "1/1/18", endDate: "12/31/18", encounterRate: .0510, group: "Microsoft" },
    { startDate: "11/1/16", endDate: "10/31/17", encounterRate: .2940, group: "Kaspersky" },
    { startDate: "12/1/17", endDate: "12/31/17", encounterRate: .180, group: "Microsoft" },
    { startDate: "11/1/17", endDate: "11/30/17", encounterRate: .190, group: "Microsoft" },
    { startDate: "10/1/17", endDate: "10/31/17", encounterRate: .160, group: "Microsoft" },
    { startDate: "9/1/17", endDate: "9/30/17", encounterRate: .1900, group: "Microsoft" },
    { startDate: "8/1/17", endDate: "8/31/17", encounterRate: .1600, group: "Microsoft" },
    { startDate: "7/1/17", endDate: "7/31/17", encounterRate: .1700, group: "Microsoft" },
    { startDate: "3/1/17", endDate: "3/31/17", encounterRate: .070, group: "Microsoft" },
    { startDate: "2/1/17", endDate: "2/28/17", encounterRate: .090, group: "Microsoft" },
    { startDate: "1/1/17", endDate: "1/31/17", encounterRate: .1030, group: "Microsoft" },
    { startDate: "4/1/16", endDate: "6/30/16", encounterRate: .2120, group: "Microsoft" },
    { startDate: "1/1/16", endDate: "3/31/16", encounterRate: .3332, group: "Panda Labs" },
    { startDate: "1/1/16", endDate: "3/31/16", encounterRate: .1830, group: "Microsoft" },
    { startDate: "1/1/15", endDate: "3/31/15", encounterRate: .3213, group: "Panda Labs" },
    { startDate: "1/1/15", endDate: "3/31/15", encounterRate: .1790, group: "Microsoft" },
    { startDate: "10/1/15", endDate: "12/31/15", encounterRate: .2080, group: "Microsoft" },
    { startDate: "7/1/15", endDate: "9/30/15", encounterRate: .3212, group: "Panda Labs" },
    { startDate: "7/1/15", endDate: "9/30/15", encounterRate: .1780, group: "Microsoft" },
    { startDate: "4/1/15", endDate: "6/30/15", encounterRate: .3221, group: "Panda Labs" },
    { startDate: "4/1/15", endDate: "6/30/15", encounterRate: .1530, group: "Microsoft" },
    { startDate: "1/1/15", endDate: "3/30/15", encounterRate: .3651, group: "Panda Labs" },
    { startDate: "1/1/15", endDate: "3/30/15", encounterRate: .1760, group: "Microsoft" },
    { startDate: "11/1/13", endDate: "10/31/14", encounterRate: .3840, group: "Kaspersky" },
    { startDate: "1/1/14", endDate: "12/31/14", encounterRate: .3042, group: "Panda Labs" },
    { startDate: "10/1/14", endDate: "12/31/14", encounterRate: .1590, group: "Microsoft" },
    { startDate: "7/1/14", endDate: "9/30/14", encounterRate: .2010, group: "Microsoft" },
    { startDate: "4/1/14", endDate: "6/30/14", encounterRate: .3687, group: "Panda Labs" },
    { startDate: "4/1/14", endDate: "6/30/14", encounterRate: .1910, group: "Microsoft" },
    { startDate: "1/1/14", endDate: "3/30/14", encounterRate: .3277, group: "Panda Labs" },
    { startDate: "1/1/14", endDate: "3/1/14", encounterRate: .2130, group: "Microsoft" },
    { startDate: "10/1/11", endDate: "4/1/12", encounterRate: .3800, group: "Levesque" },
];

const timeFormatter =  d3.timeParse("%m/%d/%y");
const data = rawData.map((d) => {
    return {
        startDate: timeFormatter(d.startDate) || new Date(0),
        endDate: timeFormatter(d.endDate) || new Date(0),
        encounterRate: d.encounterRate,
        group: d.group,
    }
});

export default data;