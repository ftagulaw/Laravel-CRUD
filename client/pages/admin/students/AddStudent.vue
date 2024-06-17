<template>
  <NuxtLayout name="admin">
    <Head>
      <Title>Add Students</Title>
    </Head>
    <form @submit.prevent="saveStudent" class="max-w-md mx-auto p-10 bg-white rounded-md shadow-md">
      <h2 class="text-lg font-bold mb-4">Add Student</h2>
      <div class="grid grid-cols-1 gap-y-6">
        <div>
          <label for="first-name" class="block text-sm font-medium text-gray-700">First name</label>
          <input v-model="student.firstname" type="text" name="first-name" id="first_name" autocomplete="given-name" class="mt-1 block w-full pl-5 text-sm text-gray-700 border border-gray-300 rounded-md focus:ring-indigo-600 focus:border-indigo-600" />
        </div>
        <div>
          <label for="last-name" class="block text-sm font-medium text-gray-700">Last name</label>
          <input v-model="student.lastname" type="text" name="last-name" id="last_name" autocomplete="family-name" class="mt-1 block w-full pl-5 text-sm text-gray-700 border border-gray-300 rounded-md focus:ring-indigo-600 focus:border-indigo-600" />
        </div>
        <div>
          <label for="course" class="block text-sm font-medium text-gray-700">Course</label>
          <input v-model="student.course" type="text" name="course" id="course" class="mt-1 block w-full pl-5 text-sm text-gray-700 border border-gray-300 rounded-md focus:ring-indigo-600 focus:border-indigo-600" />
        </div>
        <div>
          <label for="birthdate" class="block text-sm font-medium text-gray-700">Birthdate</label>
          <FormDateField v-model="student.birthday" id="birthday" name="birthdate" placeholder="Birthdate" class="mt-1 block w-full pl-5 text-sm text-gray-700 border border-gray-300 rounded-md focus:ring-indigo-600 focus:border-indigo-600" />
        </div>
        <div>
          <label for="age" class="block text-sm font-medium text-gray-700">Age</label>
          <input v-model="student.age" type="text" name="age" id="age" class="mt-1 block w-full pl-5 text-sm text-gray-700 border border-gray-300 rounded-md focus:ring-indigo-600 focus:border-indigo-600" />
        </div>
        <div>
          <label for="allowance" class="block text-sm font-medium text-gray-700">Allowance</label>
          <input v-model="student.allowance" type="text" name="allowance" id="allowance" class="mt-1 block w-full pl-5 text-sm text-gray-700 border border-gray-300 rounded-md focus:ring-indigo-600 focus:border-indigo-600" />
        </div>
      </div>
      <div class="flex justify-end mt-6">
        <button type="button" class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-md" @click="navigateTo('/admin/students/')">Cancel</button>
        <button type="submit" class="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 border border-indigo-600 rounded-md">Save</button>
      </div>
    </form>
  </NuxtLayout>
</template>

<script>

import { studentService } from '~/components/api/admin/StudentService';

export default{
  name:"createStudent",
  data(){
    return {
      student:{
        firstname: '',
        lastname: '',
        course: '',
        birthday: '',
        age: '',
        allowance: '',
      }
    }
  },
  methods:{
    async saveStudent() {
  try {
    const students = {
      firstname: this.student.firstname,
      lastname: this.student.lastname,
      course: this.student.course,
      birthday: this.student.birthday,
      age: this.student.age,
      allowance: parseFloat(this.student.allowance).toFixed(8),
    }

    const response = await studentService.createStudent(students);

    if (response && response.data) {
      console.log('Student created successfully:', response.data);
      alert('Student has been added!');
      navigateTo('/admin/students');
    } else {
      console.error('Error creating student:', response);
      alert('Student creation failed!');
    }
  } catch (error) {
    console.error('Error saving student:', error.message);
    alert('Error saving student!');
  }
}
  }
}
</script>