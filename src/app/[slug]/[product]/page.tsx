import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PageContainer } from "@/components/page-container";
import { PageHeader } from "@/components/page-header";
import { ProductImageGallery } from "@/components/product-image-gallery";
import { 
  ArrowRight, 
  Download,
  Share2,
  Settings,
  CheckCircle,
  Award,
  Shield,
  Zap,
  FileText,
  MessageCircle,
  Phone,
  Mail,
  Package,
  Wrench
} from "lucide-react";
import { getProduct, getCategory, getCategoryProducts } from "@/lib/data";
import { ProductPageProps } from "@/lib/types";
import Image from "next/image";

export default async function ProductPage({ params }: ProductPageProps) {
  const resolvedParams = await params;
  const product = await getProduct(resolvedParams.slug, resolvedParams.product);
  
  if (!product) {
    notFound();
  }

  const category = await getCategory(resolvedParams.slug);
  const relatedProducts = await getCategoryProducts(resolvedParams.slug);
  const otherProducts = relatedProducts.filter(p => p.id !== product.id).slice(0, 3);

  return (
    <PageContainer>
      <PageHeader
        title={product.name}
        description={product.description}
        breadcrumbs={[
          { title: category?.name || "Category", href: `/${resolvedParams.slug}` },
          { title: product.name }
        ]}
      >
        <div className="flex flex-wrap items-center gap-2">
          <Button variant="outline" size="sm">
            <Share2 className="mr-2 h-4 w-4" />
            Share
          </Button>
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Datasheet
          </Button>
          <Button size="sm">
            <MessageCircle className="mr-2 h-4 w-4" />
            Get Quote
          </Button>
        </div>
      </PageHeader>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {/* Main Content */}
        <div className="md:col-span-2 lg:col-span-2 space-y-6 lg:space-y-8">
          {/* Product Image Gallery */}
          <ProductImageGallery 
            images={product.images}
            productName={product.name}
          />
          
          {/* Product Overview */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="outline" className="text-sm">
                {product.brand}
              </Badge>
              <Badge variant="secondary" className="text-sm">
                {product.productType}
              </Badge>
              {product.model && (
                <Badge variant="outline" className="text-sm">
                  Model: {product.model}
                </Badge>
              )}
            </div>

            {/* Treatments/Features Badges */}
            {product.treatments && (
              <div className="flex flex-wrap gap-2">
                {product.treatments.antiStatic && (
                  <Badge variant="secondary" className="text-xs">
                    <Shield className="mr-1 h-3 w-3" />
                    Anti-Static
                  </Badge>
                )}
                {product.treatments.ptfeMembrane && (
                  <Badge variant="secondary" className="text-xs">
                    <Zap className="mr-1 h-3 w-3" />
                    PTFE Membrane
                  </Badge>
                )}
                {product.treatments.oilWaterRepellent && (
                  <Badge variant="secondary" className="text-xs">
                    <Shield className="mr-1 h-3 w-3" />
                    Oil-Water Repellent
                  </Badge>
                )}
                {product.treatments.fireRetardant && (
                  <Badge variant="secondary" className="text-xs">
                    <Shield className="mr-1 h-3 w-3" />
                    Fire Retardant
                  </Badge>
                )}
                {product.treatments.washable && (
                  <Badge variant="secondary" className="text-xs">
                    <CheckCircle className="mr-1 h-3 w-3" />
                    Washable
                  </Badge>
                )}
                {product.treatments.chemicalResistant && (
                  <Badge variant="secondary" className="text-xs">
                    <Shield className="mr-1 h-3 w-3" />
                    Chemical Resistant
                  </Badge>
                )}
                {product.treatments.temperatureResistant && (
                  <Badge variant="secondary" className="text-xs">
                    <Shield className="mr-1 h-3 w-3" />
                    Temperature Resistant
                  </Badge>
                )}
                {product.treatments.conductive && (
                  <Badge variant="secondary" className="text-xs">
                    <Zap className="mr-1 h-3 w-3" />
                    Conductive
                  </Badge>
                )}
              </div>
            )}
          </div>

          {/* Detailed Information Tabs */}
          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto p-1 gap-1">
              <TabsTrigger value="overview" className="h-9">Overview</TabsTrigger>
              <TabsTrigger value="specifications" className="h-9">Specifications</TabsTrigger>
              <TabsTrigger value="applications" className="h-9">Applications</TabsTrigger>
              <TabsTrigger value="certifications" className="h-9">Certifications</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              {/* Detailed Description */}
              {product.detailedDescription && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <FileText className="mr-2 h-5 w-5 text-primary" />
                      Product Overview
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="prose prose-sm max-w-none">
                      <p className="text-sm leading-relaxed whitespace-pre-line">
                        {product.detailedDescription}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Features */}
              {product.features && product.features.length > 0 && product.features.some(f => f !== "-") && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Zap className="mr-2 h-5 w-5 text-primary" />
                      Key Features
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {product.features.filter(f => f !== "-").map((feature, index) => (
                        <div key={index} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Advantages */}
              {product.advantages && product.advantages.length > 0 && product.advantages.some(a => a !== "-") && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Award className="mr-2 h-5 w-5 text-primary" />
                      Advantages
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {product.advantages.filter(a => a !== "-").map((advantage, index) => (
                        <div key={index} className="flex items-start space-x-2">
                          <Award className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{advantage}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Special Features */}
              {product.specialFeatures && product.specialFeatures.length > 0 && product.specialFeatures.some(f => f !== "-") && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Zap className="mr-2 h-5 w-5 text-primary" />
                      Special Features
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {product.specialFeatures.filter(f => f !== "-").map((feature, index) => (
                        <div key={index} className="flex items-start space-x-2">
                          <Zap className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Benefits */}
              {product.benefits && product.benefits.length > 0 && product.benefits.some(b => b !== "-") && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                      Benefits
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {product.benefits.filter(b => b !== "-").map((benefit, index) => (
                        <div key={index} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="specifications" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Technical Specifications */}
                {product.technicalSpecs && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Settings className="mr-2 h-5 w-5 text-primary" />
                        Technical Specifications
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Table>
                        <TableBody>
                          {product.technicalSpecs.filtrationEfficiency && product.technicalSpecs.filtrationEfficiency !== "-" && (
                            <TableRow>
                              <TableCell className="font-medium">Filtration Efficiency</TableCell>
                              <TableCell>{product.technicalSpecs.filtrationEfficiency}</TableCell>
                            </TableRow>
                          )}
                          {product.technicalSpecs.operatingTemperature && product.technicalSpecs.operatingTemperature !== "-" && (
                            <TableRow>
                              <TableCell className="font-medium">Operating Temperature</TableCell>
                              <TableCell>{product.technicalSpecs.operatingTemperature}</TableCell>
                            </TableRow>
                          )}
                          {product.technicalSpecs.temperatureRange && product.technicalSpecs.temperatureRange !== "-" && (
                            <TableRow>
                              <TableCell className="font-medium">Temperature Range</TableCell>
                              <TableCell>{product.technicalSpecs.temperatureRange}</TableCell>
                            </TableRow>
                          )}
                          {product.technicalSpecs.minimumParticleSize && product.technicalSpecs.minimumParticleSize !== "-" && (
                            <TableRow>
                              <TableCell className="font-medium">Minimum Particle Size</TableCell>
                              <TableCell>{product.technicalSpecs.minimumParticleSize}</TableCell>
                            </TableRow>
                          )}
                          {product.technicalSpecs.surfaceResistance && product.technicalSpecs.surfaceResistance !== "-" && (
                            <TableRow>
                              <TableCell className="font-medium">Surface Resistance</TableCell>
                              <TableCell>{product.technicalSpecs.surfaceResistance}</TableCell>
                            </TableRow>
                          )}
                          {product.technicalSpecs.filtrationSurface && product.technicalSpecs.filtrationSurface !== "-" && (
                            <TableRow>
                              <TableCell className="font-medium">Filtration Surface</TableCell>
                              <TableCell>{product.technicalSpecs.filtrationSurface}</TableCell>
                            </TableRow>
                          )}
                          {product.technicalSpecs.airflowCapacity && product.technicalSpecs.airflowCapacity !== "-" && (
                            <TableRow>
                              <TableCell className="font-medium">Airflow Capacity</TableCell>
                              <TableCell>{product.technicalSpecs.airflowCapacity}</TableCell>
                            </TableRow>
                          )}
                          {product.technicalSpecs.dustHoldingCapacity && product.technicalSpecs.dustHoldingCapacity !== "-" && (
                            <TableRow>
                              <TableCell className="font-medium">Dust Holding Capacity</TableCell>
                              <TableCell>{product.technicalSpecs.dustHoldingCapacity}</TableCell>
                            </TableRow>
                          )}
                          {product.technicalSpecs.initialPressureDrop && product.technicalSpecs.initialPressureDrop !== "-" && (
                            <TableRow>
                              <TableCell className="font-medium">Initial Pressure Drop</TableCell>
                              <TableCell>{product.technicalSpecs.initialPressureDrop}</TableCell>
                            </TableRow>
                          )}
                          {product.technicalSpecs.serviceLife && product.technicalSpecs.serviceLife !== "-" && (
                            <TableRow>
                              <TableCell className="font-medium">Service Life</TableCell>
                              <TableCell>{product.technicalSpecs.serviceLife}</TableCell>
                            </TableRow>
                          )}
                          {product.technicalSpecs.materialType && product.technicalSpecs.materialType !== "-" && (
                            <TableRow>
                              <TableCell className="font-medium">Material Type</TableCell>
                              <TableCell>{product.technicalSpecs.materialType}</TableCell>
                            </TableRow>
                          )}
                          {product.technicalSpecs.woodDustOptimized && (
                            <TableRow>
                              <TableCell className="font-medium">Wood Dust Optimized</TableCell>
                              <TableCell>
                                {product.technicalSpecs.woodDustOptimized ? (
                                  <Badge variant="secondary">Yes</Badge>
                                ) : (
                                  <Badge variant="outline">No</Badge>
                                )}
                              </TableCell>
                            </TableRow>
                          )}
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                )}

                {/* Dimensions */}
                {product.dimensions && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Package className="mr-2 h-5 w-5 text-primary" />
                        Dimensions & Physical Properties
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Table>
                        <TableBody>
                          {product.dimensions.outerDiameter && product.dimensions.outerDiameter !== "-" && (
                            <TableRow>
                              <TableCell className="font-medium">Outer Diameter</TableCell>
                              <TableCell>{product.dimensions.outerDiameter}</TableCell>
                            </TableRow>
                          )}
                          {product.dimensions.innerDiameter && product.dimensions.innerDiameter !== "-" && (
                            <TableRow>
                              <TableCell className="font-medium">Inner Diameter</TableCell>
                              <TableCell>{product.dimensions.innerDiameter}</TableCell>
                            </TableRow>
                          )}
                          {product.dimensions.length && product.dimensions.length !== "-" && (
                            <TableRow>
                              <TableCell className="font-medium">Length</TableCell>
                              <TableCell>{product.dimensions.length}</TableCell>
                            </TableRow>
                          )}
                          {product.dimensions.height && product.dimensions.height !== "-" && (
                            <TableRow>
                              <TableCell className="font-medium">Height</TableCell>
                              <TableCell>{product.dimensions.height}</TableCell>
                            </TableRow>
                          )}
                          {product.dimensions.width && product.dimensions.width !== "-" && (
                            <TableRow>
                              <TableCell className="font-medium">Width</TableCell>
                              <TableCell>{product.dimensions.width}</TableCell>
                            </TableRow>
                          )}
                          {product.dimensions.thickness && product.dimensions.thickness !== "-" && (
                            <TableRow>
                              <TableCell className="font-medium">Thickness</TableCell>
                              <TableCell>{product.dimensions.thickness}</TableCell>
                            </TableRow>
                          )}
                          {product.dimensions.rollWidth && product.dimensions.rollWidth !== "-" && (
                            <TableRow>
                              <TableCell className="font-medium">Roll Width</TableCell>
                              <TableCell>{product.dimensions.rollWidth}</TableCell>
                            </TableRow>
                          )}
                          {product.dimensions.rollLength && product.dimensions.rollLength !== "-" && (
                            <TableRow>
                              <TableCell className="font-medium">Roll Length</TableCell>
                              <TableCell>{product.dimensions.rollLength}</TableCell>
                            </TableRow>
                          )}
                          {product.dimensions.capacity && product.dimensions.capacity !== "-" && (
                            <TableRow>
                              <TableCell className="font-medium">Capacity</TableCell>
                              <TableCell>{product.dimensions.capacity}</TableCell>
                            </TableRow>
                          )}
                          {product.dimensions.flangeSize && product.dimensions.flangeSize !== "-" && (
                            <TableRow>
                              <TableCell className="font-medium">Flange Size</TableCell>
                              <TableCell>{product.dimensions.flangeSize}</TableCell>
                            </TableRow>
                          )}
                          {product.dimensions.shape && product.dimensions.shape !== "-" && (
                            <TableRow>
                              <TableCell className="font-medium">Shape</TableCell>
                              <TableCell>{product.dimensions.shape}</TableCell>
                            </TableRow>
                          )}
                          <TableRow>
                            <TableCell className="font-medium">Customizable</TableCell>
                            <TableCell>
                              {product.dimensions.customizable ? (
                                <Badge variant="secondary">Yes</Badge>
                              ) : (
                                <Badge variant="outline">Standard Only</Badge>
                              )}
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                )}
              </div>

              {/* Materials */}
              {product.materials && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Settings className="mr-2 h-5 w-5 text-primary" />
                      Materials & Construction
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableBody>
                        {product.materials.filterMedia && product.materials.filterMedia !== "-" && (
                          <TableRow>
                            <TableCell className="font-medium">Filter Media</TableCell>
                            <TableCell>{product.materials.filterMedia}</TableCell>
                          </TableRow>
                        )}
                        {product.materials.construction && product.materials.construction !== "-" && (
                          <TableRow>
                            <TableCell className="font-medium">Construction</TableCell>
                            <TableCell>{product.materials.construction}</TableCell>
                          </TableRow>
                        )}
                        {product.materials.endCap && product.materials.endCap !== "-" && (
                          <TableRow>
                            <TableCell className="font-medium">End Cap</TableCell>
                            <TableCell>
                              <Badge variant="outline" className="text-xs">
                                {product.materials.endCap}
                              </Badge>
                            </TableCell>
                          </TableRow>
                        )}
                        {product.materials.gasket && product.materials.gasket !== "-" && (
                          <TableRow>
                            <TableCell className="font-medium">Gasket</TableCell>
                            <TableCell>
                              <Badge variant="outline" className="text-xs">
                                {product.materials.gasket}
                              </Badge>
                            </TableCell>
                          </TableRow>
                        )}
                        {product.materials.core && product.materials.core !== "-" && (
                          <TableRow>
                            <TableCell className="font-medium">Core</TableCell>
                            <TableCell>{product.materials.core}</TableCell>
                          </TableRow>
                        )}
                        {product.materials.frame && product.materials.frame !== "-" && (
                          <TableRow>
                            <TableCell className="font-medium">Frame</TableCell>
                            <TableCell>{product.materials.frame}</TableCell>
                          </TableRow>
                        )}
                        {product.materials.housing && product.materials.housing !== "-" && (
                          <TableRow>
                            <TableCell className="font-medium">Housing</TableCell>
                            <TableCell>{product.materials.housing}</TableCell>
                          </TableRow>
                        )}
                        {product.materials.support && product.materials.support !== "-" && (
                          <TableRow>
                            <TableCell className="font-medium">Support Structure</TableCell>
                            <TableCell>{product.materials.support}</TableCell>
                          </TableRow>
                        )}
                        {product.materials.sealing && product.materials.sealing !== "-" && (
                          <TableRow>
                            <TableCell className="font-medium">Sealing</TableCell>
                            <TableCell>{product.materials.sealing}</TableCell>
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              )}

              {/* Connection Type */}
              {product.connectionType && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Wrench className="mr-2 h-5 w-5 text-primary" />
                      Connection Details
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableBody>
                        {product.connectionType.type && product.connectionType.type !== "-" && (
                          <TableRow>
                            <TableCell className="font-medium">Connection Type</TableCell>
                            <TableCell>
                              <Badge variant="secondary">{product.connectionType.type}</Badge>
                            </TableCell>
                          </TableRow>
                        )}
                        {(Number(product.connectionType.lugCount) > 0) && (
                          <TableRow>
                            <TableCell className="font-medium">Lug Count</TableCell>
                            <TableCell>{product.connectionType.lugCount}</TableCell>
                          </TableRow>
                        )}
                        {product.connectionType.mechanism && product.connectionType.mechanism !== "-" && (
                          <TableRow>
                            <TableCell className="font-medium">Mechanism</TableCell>
                            <TableCell>{product.connectionType.mechanism}</TableCell>
                          </TableRow>
                        )}
                        {product.connectionType.size && product.connectionType.size !== "-" && (
                          <TableRow>
                            <TableCell className="font-medium">Connection Size</TableCell>
                            <TableCell>{product.connectionType.size}</TableCell>
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              )}

              {/* Available Sizes */}
              {product.availableSizes && product.availableSizes.length > 0 && 
               product.availableSizes.some(size => size.model !== "-" || size.outerDiameter !== "-" || size.innerDiameter !== "-" || size.length !== "-") && (
                <Card>
                  <CardHeader>
                    <CardTitle>Available Sizes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Model</TableHead>
                          <TableHead>Outer Diameter</TableHead>
                          <TableHead>Inner Diameter</TableHead>
                          <TableHead>Length</TableHead>
                          <TableHead>Filtration Surface</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {product.availableSizes.filter(size => 
                          size.model !== "-" || size.outerDiameter !== "-" || size.innerDiameter !== "-" || size.length !== "-"
                        ).map((size, index) => (
                          <TableRow key={index}>
                            <TableCell className="font-medium">{size.model}</TableCell>
                            <TableCell>{size.outerDiameter}</TableCell>
                            <TableCell>{size.innerDiameter}</TableCell>
                            <TableCell>{size.length}</TableCell>
                            <TableCell>{size.filtrationSurface}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="applications" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Wrench className="mr-2 h-5 w-5 text-primary" />
                    Applications & Industries
                  </CardTitle>
                  <CardDescription>
                    This product is suitable for the following applications and industries
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {product.applications.filter(app => app !== "-").map((application) => (
                      <div
                        key={application}
                        className="p-3 rounded-lg border bg-muted/50"
                      >
                        <div className="text-sm font-medium">{application}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Customization Options */}
              {product.customizationOptions && product.customizationOptions.length > 0 && product.customizationOptions.some(c => c !== "-") && (
                <Card>
                  <CardHeader>
                    <CardTitle>Customization Options</CardTitle>
                    <CardDescription>
                      Available customization options for specific requirements
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {product.customizationOptions.filter(c => c !== "-").map((option, index) => (
                        <div key={index} className="flex items-start space-x-2">
                          <Settings className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{option}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="certifications" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Certifications */}
                {product.certifications && product.certifications.length > 0 && product.certifications.some(c => c !== "-") && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Award className="mr-2 h-5 w-5 text-primary" />
                        Certifications
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {product.certifications.filter(c => c !== "-").map((cert) => (
                          <div key={cert} className="flex items-center space-x-2">
                            <Award className="h-4 w-4 text-primary" />
                            <span className="font-medium">{cert}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Quality Standards */}
                {product.qualityStandards && product.qualityStandards.length > 0 && product.qualityStandards.some(q => q !== "-") && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Shield className="mr-2 h-5 w-5 text-primary" />
                        Quality Standards
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {product.qualityStandards.filter(q => q !== "-").map((standard, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <Shield className="h-4 w-4 text-primary" />
                            <span className="font-medium">{standard}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>

              {/* Documentation */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="mr-2 h-5 w-5 text-primary" />
                    Documentation & Downloads
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Button variant="outline" className="justify-start">
                      <Download className="mr-2 h-4 w-4" />
                      Product Datasheet
                    </Button>
                    <Button variant="outline" className="justify-start">
                      <Download className="mr-2 h-4 w-4" />
                      Technical Specifications
                    </Button>
                    <Button variant="outline" className="justify-start">
                      <Download className="mr-2 h-4 w-4" />
                      Installation Guide
                    </Button>
                    <Button variant="outline" className="justify-start">
                      <Download className="mr-2 h-4 w-4" />
                      Certification Documents
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Sidebar */}
        <div className="md:col-span-2 lg:col-span-1 space-y-6">
          {/* Contact Card */}
          <Card>
            <CardHeader>
              <CardTitle>Get a Quote</CardTitle>
              <CardDescription>
                Contact our experts for pricing and technical support
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full">
                <MessageCircle className="mr-2 h-4 w-4" />
                Request Quote
              </Button>
              <Button variant="outline" className="w-full">
                <Phone className="mr-2 h-4 w-4" />
                Call Technical Support
              </Button>
              <Button variant="outline" className="w-full">
                <Mail className="mr-2 h-4 w-4" />
                Email Inquiry
              </Button>
            </CardContent>
          </Card>

          {/* Product Summary */}
          <Card>
            <CardHeader>
              <CardTitle>Product Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Brand</span>
                  <span className="text-sm font-medium">{product.brand}</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Product Type</span>
                  <span className="text-sm font-medium">{product.productType}</span>
                </div>
                {product.model && (
                  <>
                    <Separator />
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Model</span>
                      <span className="text-sm font-medium">{product.model}</span>
                    </div>
                  </>
                )}
                <Separator />
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Category</span>
                  <span className="text-sm font-medium">{category?.name}</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Applications</span>
                  <span className="text-sm font-medium">{product.applications.length}+</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Related Products */}
          {otherProducts.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Related Products</CardTitle>
                <CardDescription>
                  Other products in this category
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {otherProducts.map((relatedProduct) => (
                  <div key={relatedProduct.id} className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-md overflow-hidden bg-muted flex-shrink-0">
                        <Image
                          src={relatedProduct.images?.[0] || "/products_images/product-catagories-images/cylindrical-filter-cartridge.webp"}
                          alt={relatedProduct.name}
                          width={48}
                          height={48}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <Link
                          href={`/${resolvedParams?.slug}/${relatedProduct.id}`}
                          className="text-sm font-medium line-clamp-2"
                        >
                          {relatedProduct.name}
                        </Link>
                        <p className="text-xs text-muted-foreground line-clamp-2">
                          {relatedProduct.description}
                        </p>
                      </div>
                    </div>
                    <Separator />
                  </div>
                ))}
                <Button variant="outline" size="sm" asChild className="w-full">
                  <Link href={`/${resolvedParams.slug}`}>
                    View All Products <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </PageContainer>
  );
}

// Generate static params for all products
export async function generateStaticParams() {
  try {
    const { getCategories, getCategoryProducts } = await import("@/lib/data");
    const categories = await getCategories();
    const params = [];
    
    for (const category of categories) {
      try {
        const products = await getCategoryProducts(category.slug);
        for (const product of products) {
          params.push({
            slug: category.slug,
            product: product.id,
          });
        }
      } catch (error) {
        console.warn(`Error loading products for category ${category.slug}:`, error);
        continue;
      }
    }
    
    console.log(`Generated ${params.length} product static params`);
    return params;
  } catch (error) {
    console.error("Error generating static params for products:", error);
    return [];
  }
}

// Enable dynamic rendering for missing products
export const dynamicParams = true;