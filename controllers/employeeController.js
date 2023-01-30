const Employee=require("../models/employee.js");


 const createEmployee=async (req,res,next)=>{
    const newEmployee=new Employee(req.body)

    try{
        const savedEmployee=await newEmployee.save()
        res.status(200).json(savedEmployee)
    }catch(err){
       next(err);
    }
} 


 const updateEmployee=async (req,res,next)=>{
    try {
        const updatedEmployee = await Employee.findByIdAndUpdate(
          req.params.id,
          { $set: req.body },
          { new: true }
        );
        res.status(200).json(updatedEmployee);
      } catch (err) {
        next(err);
      }
}


 const deleteEmployee=async (req,res,next)=>{
    try {
        await Employee.findByIdAndDelete(req.params.id);
        res.status(200).json("Employee has been deleted.");
      } catch (err) {
        next(err);
      }
}


 const getEmployee=async (req,res,next)=>{
    const employee=req.params.id;
    try{
        const booked=await Employee.findById(
            employee
        );
        res.status(200).json(booked);
    }
    catch(err){
        next(err);
    }
}


 const getAllEmployee=async (req,res,next)=>{
    const Employee=req.query;
    try{
        const newEmployee=await Employee.find(Employee);
        res.status(200).json(newEmployee);
    }
    catch(err){
        next(err);
    }
}

module.exports =  {
    createEmployee,
    updateEmployee,
    deleteEmployee,
    getEmployee,
    getAllEmployee
};