import { useState } from "react";
import { Search, Filter, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Products = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const products = [
    {
      id: 1,
      name: "Deep Groove Ball Bearing 6205",
      category: "Ball Bearings",
      specs: "25×52×15mm",
      priceRange: "$5 - $15",
      inStock: true,
      applications: "Motors, pumps, fans"
    },
    {
      id: 2,
      name: "Cylindrical Roller Bearing NU308",
      category: "Roller Bearings",
      specs: "40×90×23mm",
      priceRange: "$25 - $45",
      inStock: true,
      applications: "Heavy machinery, gearboxes"
    },
    {
      id: 3,
      name: "Tapered Roller Bearing 30205",
      category: "Roller Bearings",
      specs: "25×52×15mm",
      priceRange: "$12 - $28",
      inStock: true,
      applications: "Automotive, agriculture"
    },
    {
      id: 4,
      name: "Angular Contact Ball Bearing 7208",
      category: "Ball Bearings",
      specs: "40×80×18mm",
      priceRange: "$18 - $35",
      inStock: true,
      applications: "High-speed spindles"
    },
    {
      id: 5,
      name: "Spherical Roller Bearing 22210",
      category: "Roller Bearings",
      specs: "50×90×23mm",
      priceRange: "$35 - $65",
      inStock: false,
      applications: "Mining, construction"
    },
    {
      id: 6,
      name: "Thrust Ball Bearing 51208",
      category: "Thrust Bearings",
      specs: "40×68×19mm",
      priceRange: "$15 - $30",
      inStock: true,
      applications: "Crane hooks, axial loads"
    }
  ];

  const categories = ["All", "Ball Bearings", "Roller Bearings", "Thrust Bearings", "Specialty"];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Browse our comprehensive selection of industrial bearings. All products meet international quality standards.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-muted rounded-[18px] p-6 mb-8 shadow-soft">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                type="text"
                placeholder="Search by model, size, or application..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="gap-2">
              <Filter size={20} />
              Filters
            </Button>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-2 mt-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
                className={category === "All" ? "gradient-primary" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {products.map((product) => (
            <Card key={product.id} className="rounded-[18px] overflow-hidden shadow-soft hover:shadow-medium transition-smooth">
              <div className="bg-gradient-primary/5 h-48 flex items-center justify-center">
                <div className="text-6xl">⚙️</div>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-lg">{product.name}</h3>
                  {product.inStock ? (
                    <Badge className="bg-green-500/10 text-green-700 hover:bg-green-500/20">In Stock</Badge>
                  ) : (
                    <Badge variant="secondary">Pre-order</Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mb-4">{product.category}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Dimensions:</span>
                    <span className="font-medium">{product.specs}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Price Range:</span>
                    <span className="font-semibold text-primary">{product.priceRange}</span>
                  </div>
                  <div className="text-sm">
                    <span className="text-muted-foreground">Applications:</span>
                    <p className="text-foreground mt-1">{product.applications}</p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button className="flex-1" variant="outline">View Details</Button>
                  <Button className="flex-1 gradient-primary" asChild>
                    <Link to="/contact">Request Quote</Link>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-primary rounded-[18px] p-8 md:p-12 text-center shadow-medium">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Can't Find What You Need?
          </h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            We offer custom bearing solutions for specialized applications. Contact our technical team.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">
              Contact Our Team <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Products;
