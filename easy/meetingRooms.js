let canAttendMeetings = function(intervals) {
    intervals.sort((a,b) => a[0] - b[0])
    for(let i = 0, j = 1; j < intervals.length; i++, j++){
        if(intervals[i][1] > intervals[j][0]){
            return false
        }
    }
    return true
};

canAttendMeetings([[0,30],[5,10],[15,20]])
canAttendMeetings([[7,10],[2,4]])
canAttendMeetings([[5, 10], [0, 4], [20, 40], [11, 19]])