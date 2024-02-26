export default {
	getGenders () {
		const un =  new Set(Select_public_users1.data.map(td =>  td.gender))
		Table1.setData()
		return [...un].map(g => ({name: g, code:g}))
		
	},
	
}