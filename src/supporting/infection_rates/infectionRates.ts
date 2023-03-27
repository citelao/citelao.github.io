import d3 from "d3";

export const rawData = [
    { startDate: "11/1/21", endDate: "10/31/22", encounterRate: .1537, group: "Kaspersky" },
    { startDate: "11/1/20", endDate: "10/31/21", encounterRate: .1545, group: "Kaspersky" },
    { startDate: "11/1/19", endDate: "10/31/20", encounterRate: .1018, group: "Kaspersky" },
    { startDate: "11/1/18", endDate: "10/31/19", encounterRate: .198, group: "Kaspersky" },
    { startDate: "11/1/17", endDate: "10/31/18", encounterRate: .3001, group: "Kaspersky" },
    { startDate: "1/1/18", endDate: "12/31/18", encounterRate: .051, group: "Microsoft", notes: "Average monthly rate; not a cumulative annual number." },
    { startDate: "11/1/16", endDate: "10/31/17", encounterRate: .294, group: "Kaspersky", notes: "Estimated from graph" },
    { startDate: "12/1/17", endDate: "12/31/17", encounterRate: .18, group: "Microsoft", notes: "Estimated from graph" },
    { startDate: "11/1/17", endDate: "11/30/17", encounterRate: .19, group: "Microsoft", notes: "Estimated from graph" },
    { startDate: "10/1/17", endDate: "10/31/17", encounterRate: .16, group: "Microsoft", notes: "Estimated from graph" },
    { startDate: "9/1/17", endDate: "9/30/17", encounterRate: .19, group: "Microsoft", notes: "Estimated from graph" },
    { startDate: "8/1/17", endDate: "8/31/17", encounterRate: .16, group: "Microsoft", notes: "Estimated from graph" },
    { startDate: "7/1/17", endDate: "7/31/17", encounterRate: .17, group: "Microsoft", notes: "Estimated from graph" },
    { startDate: "3/1/17", endDate: "3/31/17", encounterRate: .078, group: "Microsoft" },
    { startDate: "2/1/17", endDate: "2/28/17", encounterRate: .091, group: "Microsoft" },
    { startDate: "1/1/17", endDate: "1/31/17", encounterRate: .103, group: "Microsoft" },
    { startDate: "11/1/15", endDate: "10/31/16", encounterRate: .319, group: "Kaspersky" },
    { startDate: "4/1/16", endDate: "6/30/16", encounterRate: .212, group: "Microsoft" },
    { startDate: "1/1/16", endDate: "3/31/16", encounterRate: .3332, group: "Panda Labs" },
    { startDate: "1/1/16", endDate: "3/31/16", encounterRate: .183, group: "Microsoft" },
    { startDate: "1/1/15", endDate: "12/31/15", encounterRate: .3213, group: "Panda Labs" },
    { startDate: "1/1/15", endDate: "12/31/15", encounterRate: .179, group: "Microsoft" },
    { startDate: "10/1/15", endDate: "12/31/15", encounterRate: .208, group: "Microsoft" },
    { startDate: "7/1/15", endDate: "9/30/15", encounterRate: .3212, group: "Panda Labs" },
    { startDate: "7/1/15", endDate: "9/30/15", encounterRate: .178, group: "Microsoft" },
    { startDate: "4/1/15", endDate: "6/30/15", encounterRate: .3221, group: "Panda Labs" },
    { startDate: "4/1/15", endDate: "6/30/15", encounterRate: .153, group: "Microsoft" },
    { startDate: "1/1/15", endDate: "3/30/15", encounterRate: .3651, group: "Panda Labs" },
    { startDate: "1/1/15", endDate: "3/30/15", encounterRate: .176, group: "Microsoft" },
    { startDate: "11/1/13", endDate: "10/31/14", encounterRate: .384, group: "Kaspersky" },
    { startDate: "1/1/14", endDate: "12/31/14", encounterRate: .3042, group: "Panda Labs" },
    { startDate: "10/1/14", endDate: "12/31/14", encounterRate: .159, group: "Microsoft" },
    { startDate: "7/1/14", endDate: "9/30/14", encounterRate: .201, group: "Microsoft" },
    { startDate: "4/1/14", endDate: "6/30/14", encounterRate: .3687, group: "Panda Labs" },
    { startDate: "4/1/14", endDate: "6/30/14", encounterRate: .191, group: "Microsoft" },
    { startDate: "1/1/14", endDate: "3/30/14", encounterRate: .3277, group: "Panda Labs" },
    { startDate: "1/1/14", endDate: "3/1/14", encounterRate: .213, group: "Microsoft" },
    { startDate: "10/1/11", endDate: "4/1/12", encounterRate: .38, group: "Levesque", notes: "Clinical study at Ecole Polytechnique de Montreal, n=50" },
];

const timeFormatter =  d3.timeParse("%m/%d/%y");
const data = rawData.map((d) => {
    return {
        startDate: timeFormatter(d.startDate) || new Date(0),
        endDate: timeFormatter(d.endDate) || new Date(0),
        encounterRate: d.encounterRate,
        group: d.group,
        notes: d.notes,
    }
});

export default data;