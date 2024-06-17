import BaseAPIService from '~/components/api/BaseAPIService'

class StudentService extends BaseAPIService {
    super()
    {
        this.firstname = '';
        this.lastname = '';
        this.course = '';
        this.birthday = '';
        this.allowance = 0.00;
        this.age = 0;
    }

    async getStudents(params: object): Promise<any> {
        return await this.request(`/students`, 'GET', params)
    }
    async createStudent(params: object)
    {
        return await this.request(`/students/`, 'POST', params);
    }
    async updateStudent(params: object, id: Number)
    {
        return await this.request(`/students/${id}`, 'PUT', params);
    }
    async deleteStudent(params:object, id: Number)
    {
        return await this.request(`/students/${id}`, 'DELETE', params);
    }
    async getStudentById(id: Number): Promise<any> 
    {
        return await this.request(`/students/${id}`, 'GET');
    }

    //set and get the id
    
    id: any;

    public setId(id: any): any
    {
        this.id = id;
    }

    public getId(): any
    {
        return this.id;
    }


    //variables
    private firstname: string;
    private lastname: string;
    private birthday: string;
    private course: string;
    private allowance: Number;
    private age: Number;


    public setFirstName(name: string)
    {
        this.firstname = name;
    }

    public setLastName(name: string)
    {
        this.lastname = name;
    }

    public setBirthDay(date: string)
    {
        this.birthday = date;
    }

    public setCourse(name: string)
    {
        this.course = name;
    }

    public setAllowance(amount: Number)
    {
        this.allowance = amount;
    }

    public setAge(value: Number)
    {
        this.age = value;
    }

    public getFirstName(): string
    {
        return this.firstname
    }

    public getLastName(): string
    {
        return this.lastname
    }

    public getBirthDay(): string
    {
        return this.birthday
    }

    public getCourse(): string
    {
        return this.course
    }

    public getAllowance(): Number
    {
        return this.allowance;
    }

    public getAge(): Number
    {
        return this.age;
    }

}

export const studentService = new StudentService()