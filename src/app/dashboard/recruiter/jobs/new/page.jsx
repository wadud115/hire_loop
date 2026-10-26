"use client";

import { useState } from "react";
import {
  Form,
  TextField,
  Input,
  Label,
  Select,
  Switch,
  ListBox,
  TextArea,
  Button,
} from "@heroui/react";

export default function PostJobPage() {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    type: "",
    minSalary: "",
    maxSalary: "",
    city: "",
    deadline: "",
    responsibilities: "",
    requirements: "",
    benefits: "",
  });

const [isRemote, setIsRemote] = useState(false);

const handleRemoteChange = (checked) => {
  setIsRemote(checked);

  setFormData((prev) => ({
    ...prev,
    city: checked ? "Remote" : "",
  }));

  setSubmitted(false);
};

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#0b0d12] px-4 py-10 text-white sm:px-6 lg:px-10">
      <div className="mx-auto max-w-4xl">
 
        <div className="mb-8">
          <p className="mb-3 text-sm font-medium text-blue-400">
            Recruiter Dashboard / Jobs
          </p>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Post a New Job
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-400">
            Create a job listing to find the right talent for your company.
            Fill in the details below to get started.
          </p>
        </div>

        {/* Form */}
        <Form
          onSubmit={handleSubmit}
          className="space-y-6 rounded-2xl border border-white/10 bg-[#11141c] p-5 sm:p-8"
        >
          {/* Basic Information */}
          <section className="w-full">
            <div className="mb-6 border-b border-white/10 pb-4">
              <h2 className="text-lg font-semibold">
                Basic Information
              </h2>
              <p className="mt-1 text-sm text-gray-400">
                Provide the main details about this position.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <TextField
                className="md:col-span-2"
                name="title"
                isRequired
                value={formData.title}
                onChange={(value) => handleChange("title", value)}
              >
                <Label>Job Title</Label>
                <Input
                  placeholder="e.g. Senior Frontend Developer"
                  className="border border-white/10 bg-[#0b0d12] text-white"
                />
              </TextField>

              <Select
                name="category"
                isRequired
                selectedKey={formData.category || null}
                onSelectionChange={(key) =>
                  handleChange("category", key ? String(key) : "")
                }
              >
                <Label>Job Category</Label>
                <Select.Trigger className="border border-white/10 bg-[#0b0d12] text-white">
                  <Select.Value placeholder="Select category" />
                  <Select.Indicator />
                </Select.Trigger>
                <Select.Popover>
                  <ListBox>
                    <ListBox.Item id="Engineering" textValue="Engineering">
                      Engineering
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="Design" textValue="Design">
                      Design
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="Marketing" textValue="Marketing">
                      Marketing
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="Sales" textValue="Sales">
                      Sales
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="Human Resources" textValue="Human Resources">
                      Human Resources
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="Customer Support" textValue="Customer Support">
                      Customer Support
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                  </ListBox>
                </Select.Popover>
              </Select>

              <Select
                name="type"
                isRequired
                selectedKey={formData.type || null}
                onSelectionChange={(key) =>
                  handleChange("type", key ? String(key) : "")
                }
              >
                <Label>Employment Type</Label>
                <Select.Trigger className="border border-white/10 bg-[#0b0d12] text-white">
                  <Select.Value placeholder="Select employment type" />
                  <Select.Indicator />
                </Select.Trigger>
                <Select.Popover>
                  <ListBox>
                    <ListBox.Item id="Full-time" textValue="Full-time">
                      Full-time
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="Part-time" textValue="Part-time">
                      Part-time
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="Contract" textValue="Contract">
                      Contract
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="Internship" textValue="Internship">
                      Internship
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                   
                  </ListBox>
                </Select.Popover>
              </Select>


              {/* Location + Remote Switch */}
<div className="flex flex-col gap-3">
  <div className="flex items-center justify-between">
    <Label>Location</Label>

    <Switch
      isSelected={isRemote}
      onChange={handleRemoteChange}
    >
      <Switch.Content>
        <Switch.Control>
          <Switch.Thumb />
        </Switch.Control>
        Remote
      </Switch.Content>
    </Switch>
  </div>

  <TextField
    name="city"
    isRequired={!isRemote}
    isDisabled={isRemote}
    value={formData.city}
    onChange={(value) => handleChange("city", value)}
  >
    <Input
      placeholder={
        isRemote ? "Remote position" : "e.g. Dhaka, Bangladesh"
      }
      className="border border-white/10 bg-[#0b0d12] text-white"
    />
  </TextField>
</div>

    
              <TextField
                name="deadline"
                isRequired
                value={formData.deadline}
                onChange={(value) => handleChange("deadline", value)}
              >
                <Label>Application Deadline</Label>
                <Input
                  type="date"
                  className="border border-white/10 bg-[#0b0d12] text-white"
                />
              </TextField>
            </div>
          </section>

          {/* Salary */}
          <section className="w-full">
            <div className="mb-6 border-b border-white/10 pb-4">
              <h2 className="text-lg font-semibold">
                Salary Information
              </h2>
              <p className="mt-1 text-sm text-gray-400">
                Add the expected salary range for this position.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <TextField
                name="minSalary"
                value={formData.minSalary}
                onChange={(value) => handleChange("minSalary", value)}
              >
                <Label>Minimum Salary (BDT)</Label>
                <Input
                  type="number"
                  min="0"
                  placeholder="e.g. 30000"
                  className="border border-white/10 bg-[#0b0d12] text-white"
                />
              </TextField>

              <TextField
                name="maxSalary"
                value={formData.maxSalary}
                onChange={(value) => handleChange("maxSalary", value)}
              >
                <Label>Maximum Salary (BDT)</Label>
                <Input
                  type="number"
                  min="0"
                  placeholder="e.g. 60000"
                  className="border border-white/10 bg-[#0b0d12] text-white"
                />
              </TextField>
            </div>
          </section>

          {/* Job Description */}
          <section className="w-full">
            <div className="mb-6 border-b border-white/10 pb-4">
              <h2 className="text-lg font-semibold">
                Job Description
              </h2>
              <p className="mt-1 text-sm text-gray-400">
                Describe the role and what candidates can expect.
              </p>
            </div>

            <div className="space-y-5">
              <TextField
                name="responsibilities"
                isRequired
                value={formData.responsibilities}
                onChange={(value) =>
                  handleChange("responsibilities", value)
                }
              >
                <Label>Responsibilities</Label>
                <TextArea
                  placeholder="Describe the main responsibilities of this role..."
                  rows={4}
                  className="border border-white/10 bg-[#0b0d12] text-white"
                />
              </TextField>

              <TextField
                name="requirements"
                isRequired
                value={formData.requirements}
                onChange={(value) =>
                  handleChange("requirements", value)
                }
              >
                <Label>Requirements</Label>
                <TextArea
                  placeholder="List the required skills, experience, and qualifications..."
                  rows={4}
                  className="border border-white/10 bg-[#0b0d12] text-white"
                />
              </TextField>

              <TextField
                name="benefits"
                value={formData.benefits}
                onChange={(value) => handleChange("benefits", value)}
              >
                <Label>Benefits</Label>
                <TextArea
                  placeholder="e.g. Flexible hours, remote work, paid leave..."
                  rows={3}
                  className="border border-white/10 bg-[#0b0d12] text-white"
                />
              </TextField>
            </div>
          </section>

          {/* Submit */}
          <div className="flex w-full flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs leading-5 text-gray-500">
              Your job details will be logged in the browser console.
              They will not be saved to a database.
            </p>

            <Button
              type="submit"
              className="w-full bg-white px-8 font-semibold text-black hover:bg-gray-200 sm:w-auto"
            >
              Publish Job
            </Button>
          </div>

         
        </Form>
      </div>
    </div>
  );
}
