<?php

namespace App\Http\Requests\Person;

use Illuminate\Foundation\Http\FormRequest;

class StoreRequest extends FormRequest
{
  /**
   * Determine if the user is authorized to make this request.
   */
  public function authorize(): bool
  {
    return true;
  }

  /**
   * Get the validation rules that apply to the request.
   *
   * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
   */
  public function rules(): array
  {
    return [
      'name' => 'required|string',
      'age' => 'required|numeric',
      'job' => 'required|string'
    ];
  }

  /**
   * Get the error messages for the defined validation rules.
   *
   * @return array
   */
  public function messages()
  {
    return [
      'name.required' => 'Поле "Имя" обязательно',
      'name.string' => 'Поле "Имя" должно быть строкой',
      'age.required' => 'Поле "Возраст" обязательно',
      'age.string' => 'Поле "Возраст" должно быть числом',
      'job.required' => 'Поле "Имя" обязательно',
      'job.string' => 'Поле "Имя" должно быть строкой',
    ];
  }
}