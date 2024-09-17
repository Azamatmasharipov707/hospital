import { converDate } from "@/helpers/incfunc"

export const department = {
    state: () => ({
        departments: [],
        department: {},
        countDepartment: 0
    }),
    getters: {
        departments({departments}) {
            return departments
        },
        department({department}) {
            return department
        },
        countDeparment({countDeparment}) {
            return countDeparment
        },
        activeDepartments({departments}) {
            return departments.filter(department => department.status == 0)
        }
    },
    mutations: {
        setDepartments(state, payload) {
            state.departments = [...payload.map(item => {
                item.createdTime = converDate(item.createdTime)
                return item
            })]
        },
        newDepartment(state, payload) {
            state.departments = [{...payload, createdTime: converDate(payload.createdTime)}, ...state.departments]
        },
        updateDepartment(state, payload) {
            state.departments = state.departments.map(department => {
                if(department._id == payload._id) return {...payload, createdTime: converDate(payload.createdTime)}
            })
        },
        deleteDepartment(state, payload) {
            state.departments = state.departments.filter(department => {
                if(department._id == payload) return false
                return department
            })
        }
    },
    actions: {
        async getAllDepartments({dispatch, commit}) {
            let res = await dispatch('getAxios', 'department')
            if(res.status == 200) {
                console.log(res.data)
                commit('setDepartments', res.data)
            }
        }
    }
}