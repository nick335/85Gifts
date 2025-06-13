import type React from "react";

import { useEffect, useState } from "react";
import { Edit, Eye, Plus, Trash } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Skeleton } from "@/components/ui/skeleton"
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import axios from "axios";
import { config } from "@/src/config";

// Adjusted Gift type to match API structure
type Gift = {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string[];
  imageUrl: string[];
  stock: number;
  isActive: boolean;
};

export default function AdminGiftsPage() {
  const { toast } = useToast();
  const [gifts, setGifts] = useState<Gift[]>([]);
  const [isAddEditOpen, setIsAddEditOpen] = useState(false);
  const [isViewOpen, setIsViewOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [currentGift, setCurrentGift] = useState<Gift | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentGifts = gifts.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(gifts.length / itemsPerPage);

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const [formData, setFormData] = useState<Omit<Gift, "_id">>({
    name: "",
    description: "",
    price: 0,
    category: [],
    imageUrl: [],
    stock: 0,
    isActive: true,
  });

  useEffect(() => {
    const fetchAllGifts = async () => {
      try {
        const token =
          localStorage.getItem('adminToken')
        setLoading(true);
        setError(null);

        const response = await axios.get("api/api/gift/all", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const raw = response.data?.message;
        setGifts(Array.isArray(raw) ? raw : []);
      } catch (error) {
        console.error("Error fetching gifts", error);
        setError("Failed to fetch gifts.");
      } finally {
        setLoading(false);
      }
    };
    fetchAllGifts();
  }, []);

  const handleAddGift = () => {
    setCurrentGift(null);
    setFormData({
      name: "",
      description: "",
      price: 0,
      category: [],
      imageUrl: [],
      stock: 50,
      isActive: true,
    });
    setIsAddEditOpen(true);
  };

  const handleEditGift = (gift: Gift) => {
    setCurrentGift(gift);
    setFormData({
      name: gift.name,
      description: gift.description,
      price: gift.price,
      category: gift.category,
      imageUrl: gift.imageUrl,
      stock: gift.stock,
      isActive: gift.isActive,
    });
    setIsAddEditOpen(true);
  };

  // Handle viewing a gift's details
  const handleViewGift = (gift: Gift) => {
    setCurrentGift(gift);
    setIsViewOpen(true);
  };

  // Handle opening the delete confirmation
  const handleDeletePrompt = (gift: Gift) => {
    setCurrentGift(gift);
    setIsDeleteOpen(true);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const target = e.target as HTMLInputElement;
      setFormData({
        ...formData,
        [name]: target.checked,
      });
    } else if (type === "number") {
      setFormData({
        ...formData,
        [name]: Number(value),
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token =
      localStorage.getItem('authToken')
    try {
      if (currentGift) {
        const response = await axios.put(
          `${config.BACKEND_URL}/api/gift/update/${currentGift._id}`,
          formData,
          { headers: { Authorization: `Bearer ${token}` } }
        );

        const updatedGift = response.data;
        const updatedGifts = gifts.map((g) =>
          g._id === updatedGift._id ? updatedGift : g
        );
        setGifts(updatedGifts);

        toast({
          title: "Gift Updated",
          description: `${updatedGift.name} has been updated successfully.`,
        });
      } else {
        const response = await axios.post("api/api/gift/add", formData, {
          headers: { Authorization: `Bearer ${token}` },
        });

        const newGift = response.data;
        setGifts([...gifts, newGift]);

        toast({
          title: "Gift Added",
          description: `${newGift.name} has been added successfully.`,
        });
      }
    } catch (error) {
      console.error("Error submitting gift:", error);
      toast({
        title: "Submit Error",
        description: "There was a problem submitting the gift.",
      });
    } finally {
      setIsAddEditOpen(false);
    }
  };

  const handleDeleteGift = async () => {
    const token =
      localStorage.getItem('authToken')
    if (currentGift) {
      try {
        await axios.delete(`${config.BACKEND_URL}/api/gift/delete/${currentGift._id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        const updatedGifts = gifts.filter((g) => g._id !== currentGift._id);
        setGifts(updatedGifts);

        toast({
          title: "Gift Deleted",
          description: `${currentGift.name} has been removed.`,
        });
      } catch (error) {
        console.error("Error deleting gift:", error);
        toast({
          title: "Delete Error",
          description: "There was a problem deleting the gift.",
        });
      }

      setIsDeleteOpen(false);
    }
  };

  if (error) return <div>Error fetching data</div>;

  return (
    <div className="mt-6">
      {loading ? (
        <Card>
          <CardHeader>
            <div className="grid gap-1">
              <CardTitle>All Gifts</CardTitle>
              <CardDescription>Manage gift items in your store</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[...Array(5)].map((_, i) => (
                <Skeleton key={i} className="h-12 w-full" />
              ))}
            </div>
          </CardContent>
        </Card>
      ) : gifts.length > 0 ? (
        <Card>
          <CardHeader >
            <div className="grid gap-1">
              <CardTitle>All Gifts</CardTitle>
              <CardDescription>Manage gift items in your store</CardDescription>
            </div>
            <div className="flex flex-row items-center">
              <div></div>
              <Button className="ml-auto" onClick={handleAddGift}>
                <Plus className="mr-2 h-4 w-4" />
                Add Gift
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-bold">Image</TableHead>
                  <TableHead className="font-bold text-center lg:pl-18 pl-54">
                    Name
                  </TableHead>
                  <TableHead className="text-right font-bold">Price</TableHead>
                  <TableHead className="text-center font-bold">
                    Status
                  </TableHead>
                  <TableHead className="text-right font-bold">
                    Actions
                  </TableHead>
                  {/* <TableHead className="text-right font-bold"> </TableHead> */}
                </TableRow>
              </TableHeader>
              <TableBody>
                {currentGifts.map((gift) => (
                  <TableRow key={gift._id}>
                    <TableCell>
                      <img
                        src={gift.imageUrl && gift.imageUrl.length > 0 ? gift.imageUrl[0] : "/placeholder.svg"}
                        alt={gift.name}
                        className="h-10 w-10 rounded-md object-cover"
                      />
                    </TableCell>
                    <TableCell className="font-medium">{gift.name}</TableCell>
                    <TableCell className="text-right">#{gift.price}</TableCell>
                    <TableCell className="text-center">
                      <Badge variant={gift.stock ? "default" : "outline"}>
                        {gift.stock ? "In Stock" : "Out of Stock"}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleViewGift(gift)}
                        >
                          <Eye className="h-4 w-4" />
                          <span className="sr-only">View</span>
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleEditGift(gift)}
                        >
                          <Edit className="h-4 w-4" />
                          <span className="sr-only">Edit</span>
                        </Button>
                        <Button
                          variant="ghost"
                          className="hover:bg-red-600"
                          size="icon"
                          onClick={() => handleDeletePrompt(gift)}
                        >
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
              <Button onClick={handlePrevious} variant="outline" size="sm">
                Previous
              </Button>
              <span className="text-sm text-muted-foreground">
                Page {currentPage} of {totalPages}
              </span>
              <Button onClick={handleNext} variant="outline" size="sm">
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
            <DialogTitle>
              {currentGift ? "Edit Gift" : "Add New Gift"}
            </DialogTitle>
            <DialogDescription>
              {currentGift
                ? "Update the details of this gift item."
                : "Fill in the details to add a new gift item."}
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
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
                <Input
                  id="imageUrl"
                  name="imageUrl"
                  value={formData.imageUrl}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="stock"
                  name="stock"
                  checked={formData.stock > 0}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      stock: e.target.checked ? 1 : 0,
                    })
                  }
                  className="h-4 w-4 rounded border-gray-300"
                />
                <Label htmlFor="stock">In Stock</Label>
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">
                {currentGift ? "Update Gift" : "Add Gift"}
              </Button>
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
                  src={currentGift.imageUrl && currentGift.imageUrl.length > 0 ? currentGift.imageUrl[0] : "/placeholder.svg"}
                  alt={currentGift.name}
                  className="h-40 w-40 rounded-md object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">
                    Name
                  </h3>
                  <p className="text-base">{currentGift.name}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">
                    Category
                  </h3>
                  <p className="text-base">{currentGift.category}</p>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">
                  Description
                </h3>
                {/* <p className="text-base">{currentGift.description}</p> */}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">
                    Price
                  </h3>
                  <p className="text-base">${currentGift.price}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">
                    Status
                  </h3>
                  <Badge variant={currentGift.stock ? "default" : "outline"}>
                    {currentGift.stock ? "In Stock" : "Out of Stock"}
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
                  setIsViewOpen(false);
                  handleEditGift(currentGift);
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
              This will permanently delete the gift "{currentGift?.name}". This
              action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDeleteGift}
              className="bg-destructive text-destructive-foreground"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
