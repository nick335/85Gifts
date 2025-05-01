
import type React from "react"

import { useEffect, useState } from "react"
import { Edit, Eye, Plus, Trash } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import axios from 'axios';



type Gift = {
  id: string
  name: string
  // description: string
  price: number
  category: string
  imageUrl: string
  inStock: boolean
}

// interface ApiResponse{
//   error: string;
// }

export default function AdminGiftsPage() {
  const { toast } = useToast()
  const [gifts, setGifts] = useState<Gift[]>([])
  const [isAddEditOpen, setIsAddEditOpen] = useState(false)
  const [isViewOpen, setIsViewOpen] = useState(false)
  const [isDeleteOpen, setIsDeleteOpen] = useState(false)
  const [currentGift, setCurrentGift] = useState<Gift | null>(null)
  const [loading, setLoading ] = useState(true);
const [error, setError ] = useState<string | null>(null);
const [formData, setFormData] = useState<Omit<Gift, "id">>({
    name: "",
    // description: "",
    price: 0,
    category: "",
    imageUrl: "",
    inStock: true,
  })


//currently fetching all gifts from public gifts api, will change fetch source api if changes to arrangement of api occurs in future

  useEffect(() => {
   const fetchAllGifts = async()=> {
      try{
        const token = localStorage.getItem("authToken");
          setLoading(true);
          setError(null)
        //I decided to use this to test the gift page behavior 
  const response = await axios.get("api/gift/all",{
  headers:{

  Authorization: `Bearer ${token}`,
  },
  });
  console.log("Gift API Response", response.data);
  // setGifts(response.data.message);
  const raw = response.data?.message;
  setGifts(Array.isArray(raw) ? raw : []);
      }catch (error){
  console.log("Error fetching gifts", error);
  }finally{
  setLoading(false)
  }
  };
  fetchAllGifts();
  }, []);


  // Handle opening the add gift form
  const handleAddGift = () => {
    setCurrentGift(null)
    setFormData({
      name: "",
      // description: "",
      price: 0,
      category: "",
      imageUrl: "",
      inStock: true,
    })
    setIsAddEditOpen(true)
  }

  // Handle opening the edit gift form
  const handleEditGift = (gift: Gift) => {
    setCurrentGift(gift)
    setFormData({
      name: gift.name,
      // description: gift.description,
      price: gift.price,
      category: gift.category,
      imageUrl: gift.imageUrl,
      inStock: gift.inStock,
    })
    setIsAddEditOpen(true)
  }

  // Handle viewing a gift's details
  const handleViewGift = (gift: Gift) => {
    setCurrentGift(gift)
    setIsViewOpen(true)
  }

  // Handle opening the delete confirmation
  const handleDeletePrompt = (gift: Gift) => {
    setCurrentGift(gift)
    setIsDeleteOpen(true)
  }

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target

    if (type === "checkbox") {
      const target = e.target as HTMLInputElement
      setFormData({
        ...formData,
        [name]: target.checked,
      })
    } else if (type === "number") {
      setFormData({
        ...formData,
        [name]: Number.parseFloat(value),
      })
    } else {
      setFormData({
        ...formData,
        [name]: value,
      })
    }
  }

  // Handle form submission (add or update)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (currentGift) {
      // Update existing gift
      const updatedGifts = gifts.map((gift) => (gift.id === currentGift.id ? { ...gift, ...formData } : gift))
      setGifts(updatedGifts)
      toast({
        title: "Gift Updated",
        description: `${formData.name} has been updated successfully.`,
      })
    } else {
      // Add new gift
      const newGift: Gift = {
        id: Math.random().toString(36).substring(2, 9), // Generate a random ID
        ...formData,
      }
      setGifts([...gifts, newGift])
      toast({
        title: "Gift Added",
        description: `${formData.name} has been added successfully.`,
      })
    }

    setIsAddEditOpen(false)
  }

  // Handle gift deletion
  const handleDeleteGift = () => {
    if (currentGift) {
      const updatedGifts = gifts.filter((gift) => gift.id !== currentGift.id)
      setGifts(updatedGifts)
      toast({
        title: "Gift Deleted",
        description: `${currentGift.name} has been removed.`,
      })
      setIsDeleteOpen(false)
    }
  }

  if(error){
    return<div>Erro fetching Data</div>
  }

  return (
    <div className="mt-6">
          { loading ? (<p className="text-center col-span-full mt-10 text-lg">loading gifts...</p>): gifts.length > 0 ? (
          <Card>
        <CardHeader className="flex flex-row items-center">
          <div className="grid gap-1">
            <CardTitle>All Gifts</CardTitle>
            <CardDescription>Manage gift items in your store</CardDescription>
          </div>
          <Button className="ml-auto" onClick={handleAddGift}>
            <Plus className="mr-2 h-4 w-4" />
            Add Gift
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-bold">Image</TableHead>
              <TableHead className="font-bold text-center lg:pl-18 pl-54">Name</TableHead>
                <TableHead className="text-right font-bold">Price</TableHead>
                <TableHead className="text-center font-bold">Status</TableHead>
                <TableHead className="text-right font-bold">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {gifts.map((gift) => (
                <TableRow key={gift.id}>
                  <TableCell>
                    <img
                      src={gift.imageUrl || "/placeholder.svg"}
                      alt={gift.name}
                      className="h-10 w-10 rounded-md object-cover"
                    />
                  </TableCell>
                  <TableCell className="font-medium">{gift.name}</TableCell>
                  <TableCell className="text-right">${gift.price}</TableCell>
                  <TableCell className="text-center">
                    <Badge variant={gift.inStock ? "default" : "outline"}>
                      {gift.inStock ? "In Stock" : "Out of Stock"}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="icon" onClick={() => handleViewGift(gift)}>
                        <Eye className="h-4 w-4" />
                        <span className="sr-only">View</span>
                      </Button>
                      <Button variant="ghost" size="icon" onClick={() => handleEditGift(gift)}>
                        <Edit className="h-4 w-4" />
                        <span className="sr-only">Edit</span>
                      </Button>
                      <Button variant="ghost" className="hover:bg-red-600" size="icon" onClick={() => handleDeletePrompt(gift)}>
                        <Trash className="h-4 w-4" />
                        <span className="sr-only">Delete</span>
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="flex items-center justify-end space-x-2 py-4">
            <Button variant="outline" size="sm">
              Previous
            </Button>
            <Button variant="outline" size="sm">
              Next
            </Button>
          </div>
        </CardContent>

      </Card>
          ) : ( 
              <p className="text-center col-span-full mt-10 text-lg">No gifts</p>
             )}

      {/* Add/Edit Gift Dialog */}
      <Dialog open={isAddEditOpen} onOpenChange={setIsAddEditOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>{currentGift ? "Edit Gift" : "Add New Gift"}</DialogTitle>
            <DialogDescription>
              {currentGift ? "Update the details of this gift item." : "Fill in the details to add a new gift item."}
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" value={formData.name} onChange={handleInputChange} required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  // value={formData.description}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="price">Price</Label>
                  <Input
                    id="price"
                    name="price"
                    type="number"
                    step="0.01"
                    min="0"
                    value={formData.price}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="category">Category</Label>
                  <Input
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="imageUrl">Image URL</Label>
                <Input id="imageUrl" name="imageUrl" value={formData.imageUrl} onChange={handleInputChange} required />
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="inStock"
                  name="inStock"
                  checked={formData.inStock}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      inStock: e.target.checked,
                    })
                  }
                  className="h-4 w-4 rounded border-gray-300"
                />
                <Label htmlFor="inStock">In Stock</Label>
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">{currentGift ? "Update Gift" : "Add Gift"}</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* View Gift Dialog */}
      <Dialog open={isViewOpen} onOpenChange={setIsViewOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Gift Details</DialogTitle>
          </DialogHeader>
          {currentGift && (
            <div className="grid gap-4 py-4">
              <div className="mx-auto">
                <img
                  src={currentGift.imageUrl || "/placeholder.svg"}
                  alt={currentGift.name}
                  className="h-40 w-40 rounded-md object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Name</h3>
                  <p className="text-base">{currentGift.name}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Category</h3>
                  <p className="text-base">{currentGift.category}</p>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Description</h3>
                {/* <p className="text-base">{currentGift.description}</p> */}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Price</h3>
                  <p className="text-base">${currentGift.price}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Status</h3>
                  <Badge variant={currentGift.inStock ? "default" : "outline"}>
                    {currentGift.inStock ? "In Stock" : "Out of Stock"}
                  </Badge>
                </div>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsViewOpen(false)}>
              Close
            </Button>
            {currentGift && (
              <Button
                onClick={() => {
                  setIsViewOpen(false)
                  handleEditGift(currentGift)
                }}
              >
                Edit
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={isDeleteOpen} onOpenChange={setIsDeleteOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete the gift "{currentGift?.name}". This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDeleteGift} className="bg-destructive text-destructive-foreground">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
