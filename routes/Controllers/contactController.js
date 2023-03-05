const asyncHandler =require("express-async-handler");

// @desc Get all routes
// @route Get /api/contacts

const getContacts = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Get all contacts" });
  }
    
);

// @desc Create new route
// @route POST /api/contacts

const createContact = asyncHandler(async (req, res) => {
    console.log("The request body is :", req.body);
    const {name, email,contact} =req.body;
    if (!name || !email || !contact){
      res.status(400);
      throw new Error("All fields are mandatory !");
    }
    res.status(201).json({ message: "Create contact" });
  });

// @desc  Update a contact
// @route PUT /api/contacts/id

const updateContact = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Updatecontacts for ${req.params.id}` });
  });

// @desc  Get a contact
// @route GET /api/contacts/id

const getContact = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Get contact for ${req.params.id}` });
  });

// @desc  Delete a contact
// @route DELETE /api/contacts/id

const deleteContact = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Delete contacts for ${req.params.id}` });
  });

module.exports = {
  getContacts,
  createContact,
  updateContact,
  getContact,
  deleteContact,
};
