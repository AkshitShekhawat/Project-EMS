package com.akshit.ems_backend.controller;

import com.akshit.ems_backend.dto.EmployeeDto;
import com.akshit.ems_backend.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/employees")
public class EmployeeController {

    private EmployeeService employeeService;

    //Build ADD Employee REST API
    @PostMapping
    public ResponseEntity<EmployeeDto> createEmployee(@RequestBody EmployeeDto employeeDto) {
        EmployeeDto savedEmployee = employeeService.createEmployee(employeeDto);
        return new ResponseEntity<>(savedEmployee, HttpStatus.CREATED);
    }

    // Build Get Employee REST API
    @GetMapping("{id}")
    public ResponseEntity<EmployeeDto> getEmployeeById(@PathVariable("id") Long employeeId) {
        EmployeeDto employeeDto = employeeService.getEmployeeById(employeeId);
        return ResponseEntity.ok(employeeDto);

    }

    // Build Get All Employees REST API
    @GetMapping
    public ResponseEntity<List<EmployeeDto>> getAllEmployees() {
        List<EmployeeDto> employees = employeeService.getAllEmployees();
        return ResponseEntity.ok(employees);
    }

//    //Build update Employees REST API
//    @PutMapping({"id"})//we use @PutMapping annotation to map incoming HTTP put request to this below method
//    // ({"id"}) so is this id is nothing but an url template variable and we need to bind the value od url template variable to method argument
//    //so in order to do that we can use add path avarible
//    public ResponseEntity<EmployeeDto> updateEmployee(@PathVariable("id") Long employeeId,
//                                                      @RequestBody EmployeeDto updatedEmployee){
//        EmployeeDto employeeDto = employeeService.updateEmployee(employeeId, updatedEmployee);
//        return ResponseEntity.ok(employeeDto);
//        //@RequestBody annotation will basically extract the updated JASON from the request and it will convert
//        //that JSON into EmployeeDto java object
//    }

    // Build Update Employee REST API
    @PutMapping("{id}")
    public ResponseEntity<EmployeeDto> updateEmployee(@PathVariable("id") Long employeeId,
                                                      @RequestBody EmployeeDto updatedEmployee) {
        EmployeeDto employeeDto = employeeService.updateEmployee(employeeId, updatedEmployee);
        return ResponseEntity.ok(employeeDto);
    }

    //Build Delete Employee REST API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteEmployee(@PathVariable("id") Long employeeId){
        employeeService.deleteEmployee(employeeId);
        return ResponseEntity.ok("Employee deleted Successfully!.");
    }


}
