var initialState = [
    { id: 1, name: 'tran van a', className: '.net', classId: 11 },
    { id: 2, name: 'tran van b', className: '.net', classId: 11 },
    { id: 3, name: 'tran van c', className: 'angular', classId: 12 },
    { id: 4, name: 'tran van d', className: 'angular', classId: 12 },
    { id: 5, name: 'tran van e', className: 'java', classId: 13 },
    { id: 6, name: 'tran van f', className: 'java', classId: 13 },
    { id: 7, name: 'tran van g', className: 'java', classId: 13 },
    { id: 8, name: 'tran van h', className: 'test', classId: 14 },
    { id: 9, name: 'tran van i', className: 'test', classId: 14 },
    { id: 10, name: 'tran van j', className: 'test', classId: 14 }
]

const products =(state = initialState, action) => {
    switch(action.type) {
        default: return state;
    }
}

export default products;