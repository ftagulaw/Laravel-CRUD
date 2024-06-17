<template>
  <NuxtLayout name="admin">
    <Head>
      <Title>Edit Student - {{ runtimeConfig.public.appName }}</Title>
    </Head>

    <form @submit.prevent="updateStudent" class="max-w-md mx-auto p-10 bg-white rounded-md shadow-md">
      <h2 class="text-lg font-bold mb-4">Edit Student Information</h2>

      <div class="grid grid-cols-1 gap-y-6">
        <div>
          <label for="first-name" class="block text-sm font-medium text-gray-700">First name</label>
          <input v-model="student.firstname" type="text" name="first-name" id="first_name" autocomplete="given-name"
            class="mt-1 block w-full pl-5 text-sm text-gray-700 border border-gray-300 rounded-md focus:ring-indigo-600 focus:border-indigo-600" />
        </div>

        <div>
          <label for="last-name" class="block text-sm font-medium text-gray-700">Last name</label>
          <input v-model="student.lastname" type="text" name="last-name" id="last_name" autocomplete="family-name"
            class="mt-1 block w-full pl-5 text-sm text-gray-700 border border-gray-300 rounded-md focus:ring-indigo-600 focus:border-indigo-600" />
        </div>

        <div>
          <label for="course" class="block text-sm font-medium text-gray-700">Course</label>
          <input v-model="student.course" type="text" name="course" id="course"
            class="mt-1 block w-full pl-5 text-sm text-gray-700 border border-gray-300 rounded-md focus:ring-indigo-600 focus:border-indigo-600" />
        </div>

        <div>
          <label for="birthdate" class="block text-sm font-medium text-gray-700">Birthdate</label>
          <FormDateField v-model="student.birthday" id="birthday" name="birthdate" placeholder="Birthdate"
            class="mt-1 block w-full pl-5 text-sm text-gray-700 border border-gray-300 rounded-md focus:ring-indigo-600 focus:border-indigo-600" />
        </div>

        <div>
          <label for="age" class="block text-sm font-medium text-gray-700">Age</label>
          <input v-model="student.age" type="text" name="age" id="age"
            class="mt-1 block w-full pl-5 text-sm text-gray-700 border border-gray-300 rounded-md focus:ring-indigo-600 focus:border-indigo-600" />
        </div>

        <div>
          <label for="allowance" class="block text-sm font-medium text-gray-700">Allowance</label>
          <input v-model="student.allowance" type="text" name="allowance" id="allowance"
            class="mt-1 block w-full pl-5 text-sm text-gray-700 border border-gray-300 rounded-md focus:ring-indigo-600 focus:border-indigo-600" />
        </div>
      </div>

      <div class="flex justify-end mt-6">
        <button type="button" class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-md" @click="homeStudent()">Cancel</button>
        <button type="submit" class="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 border border-indigo-600 rounded-md">Save</button>
      </div>
    </form>
  </NuxtLayout>
</template>
  
  <script setup lang="ts">

  import { studentService } from '@/components/api/admin/StudentService'

  function homeStudent()
  {
    navigateTo('/admin/students/');
  }
  
  const runtimeConfig = useRuntimeConfig()
  const route = useRoute();
  const studentId = parseInt(route.params.id as string);
  
  const student = ref({
    id: studentService.getId(),
    firstname: studentService.getFirstName(),
    lastname: studentService.getLastName(),
    course: studentService.getCourse(),
    birthday: studentService.getBirthDay(),
    age: studentService.getAge(),
    allowance: studentService.getAllowance(),
  });
  

  async function updateStudent() {
    try {
      const updatedData = {
        firstname: student.value.firstname,
        lastname: student.value.lastname,
        course: student.value.course,
        birthday: student.value.birthday,
        age: student.value.age.toString(),
        allowance: parseFloat(student.value.allowance.toString()).toFixed(8),
      };


  //    console.log("Sending data:", updatedData);
      await studentService.updateStudent(updatedData, studentService.getId());
      alert('Student updated successfully!'); 
      navigateTo('/admin/students');
    } catch (error) {
      alert('Failed to update student: ' + error.message);
    }
  }
  </script>