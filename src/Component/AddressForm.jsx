import { useForm } from "react-hook-form"
import Button from "./elements/Button"
import { useDispatch } from "react-redux"
import { setAddress } from "../stores/useInfo/addressSlice"


export const AddressFrom = ({onTabSwitch}) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(setAddress(data));
    onTabSwitch('Payment');
  }

  return (
    <form className="md:w-2/3 md: mx-auto px-3 pt-1" onSubmit={handleSubmit(onSubmit)}>
      <h3 className="pt-4 text-2xl md:text-center">Address for delivery</h3>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-bold text-gray-700 " for="streetAddress">Street Address</label>
        <input
          {...register('address', {required: true})}
          className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus: shadow-outline"
          id="street address"
          type="text"
          placeholder="Street Address"
        />
         {errors.address && <span className="text-red-500">This field is required</span>}
      </div>
      <div className="mb-4 md:flex md:justify-between">
        <div className="mb-4 md:mr-2 md:mb-0 flex-1">
          <label className="block mb-2 text-sm font bold text-gray-200" for="city">City</label>
          <input
            {...register('city')}
            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus: shadow-outline"
            id="city"
            type="text"
            placeholder="City"
          />
        </div>
        <div className="mb-4 md:mr-2 md:mb-0 flex-1">
          <label className="block mb-2 text-sm font bold text-gray-200" for="district">District</label>
          <input 
            {...register('district')}
            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus: shadow-outline"
            id="district"
            type="text"
            placeholder="District"
            />
        </div>
      </div>
      <div className="mb-4 md:flex md:justify-between">
        <div className="mb-4 md:mr-2 md:mb-0 flex-1">
          <label className="block mb-2 text-sm font bold text-gray-200" for="ward">Ward</label>
          <input
            {...register('ward')}
            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus: shadow-outline"
            id="ward"
            type="text"
            placeholder="Ward"
          />
        </div>
        <div className="mb-4 md:mr-2 md:mb-0 flex-1">
          <label className="block mb-2 text-sm font bold text-gray-200" for="number">Town</label>
          <input 
            {...register('town')}
            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus: shadow-outline"
            id="town"
            type="text"
            placeholder="Town"
            />
        </div>
      </div>
      <div className="flex justify-end p-2">
          <Button variant="dark" className="flex items-center" type="submit">
            <span className="mr-1">Next</span>
          </Button>
      </div>
    </form>
  )
}