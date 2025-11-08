"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Search, Filter, ChevronDown, X } from "lucide-react";

interface SearchFilterProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
  selectedApplications: string[];
  onApplicationsChange: (apps: string[]) => void;
  selectedTreatments: string[];
  onTreatmentsChange: (treatments: string[]) => void;
  availableApplications?: string[];
  placeholder?: string;
  showSorting?: boolean;
  showApplicationFilter?: boolean;
  showTreatmentFilter?: boolean;
  className?: string;
  onClearFilters?: () => void;
}

export function SearchFilter({
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange,
  selectedApplications,
  onApplicationsChange,
  selectedTreatments,
  onTreatmentsChange,
  availableApplications = [],
  placeholder = "Search...",
  showSorting = true,
  showApplicationFilter = true,
  showTreatmentFilter = true,
  className = "",
  onClearFilters,
}: SearchFilterProps) {
  const treatmentOptions = ['Anti-Static', 'PTFE Membrane', 'Oil-Water Repellent', 'Washable', 'Fire Retardant'];

  const handleApplicationChange = (app: string, checked: boolean) => {
    if (checked) {
      onApplicationsChange([...selectedApplications, app]);
    } else {
      onApplicationsChange(selectedApplications.filter(a => a !== app));
    }
  };

  const handleTreatmentChange = (treatment: string, checked: boolean) => {
    const treatmentKey = treatment.toLowerCase().replace(/[^a-z]/g, '-');
    if (checked) {
      onTreatmentsChange([...selectedTreatments, treatmentKey]);
    } else {
      onTreatmentsChange(selectedTreatments.filter(t => t !== treatmentKey));
    }
  };

  const hasActiveFilters = searchQuery || selectedApplications.length > 0 || selectedTreatments.length > 0;

  return (
    <div className={`flex flex-col lg:flex-row gap-4 items-start lg:items-center ${className}`}>
      {/* Search Input */}
      <div className="relative flex-1 min-w-0">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder={placeholder}
          className="pl-10"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>

      {/* Sort Select */}
      {showSorting && (
        <Select value={sortBy} onValueChange={onSortChange}>
          <SelectTrigger className="w-full lg:w-40">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="default">Default</SelectItem>
            <SelectItem value="name">Name A-Z</SelectItem>
            <SelectItem value="efficiency">Efficiency</SelectItem>
            <SelectItem value="temperature">Temperature</SelectItem>
          </SelectContent>
        </Select>
      )}

      {/* Applications Filter Dropdown */}
      {showApplicationFilter && availableApplications.length > 0 && (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="justify-between w-full lg:w-40">
              <span className="flex items-center">
                <Filter className="mr-2 h-4 w-4" />
                Applications
              </span>
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-64" align="start">
            <DropdownMenuLabel className="text-sm font-semibold">Filter by Applications</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <ScrollArea className="h-64">
              <div className="p-1">
                {availableApplications.map((app) => (
                  <DropdownMenuCheckboxItem
                    key={app}
                    checked={selectedApplications.includes(app)}
                    onCheckedChange={(checked) => handleApplicationChange(app, !!checked)}
                    className="text-sm"
                  >
                    {app}
                  </DropdownMenuCheckboxItem>
                ))}
              </div>
            </ScrollArea>
            {selectedApplications.length > 0 && (
              <>
                <DropdownMenuSeparator />
                <div className="p-2">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => onApplicationsChange([])}
                    className="w-full text-xs"
                  >
                    Clear Applications
                  </Button>
                </div>
              </>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      )}

      {/* Treatments Filter Dropdown */}
      {showTreatmentFilter && (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="justify-between w-full lg:w-40">
              <span className="flex items-center">
                <Filter className="mr-2 h-4 w-4" />
                Treatments
              </span>
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-64" align="start">
            <DropdownMenuLabel className="text-sm font-semibold">Filter by Treatments</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <ScrollArea className="h-48">
              <div className="p-1">
                {treatmentOptions.map((treatment) => (
                  <DropdownMenuCheckboxItem
                    key={treatment}
                    checked={selectedTreatments.includes(treatment.toLowerCase().replace(/[^a-z]/g, '-'))}
                    onCheckedChange={(checked) => handleTreatmentChange(treatment, !!checked)}
                    className="text-sm"
                  >
                    {treatment}
                  </DropdownMenuCheckboxItem>
                ))}
              </div>
            </ScrollArea>
            {selectedTreatments.length > 0 && (
              <>
                <DropdownMenuSeparator />
                <div className="p-2">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => onTreatmentsChange([])}
                    className="w-full text-xs"
                  >
                    Clear Treatments
                  </Button>
                </div>
              </>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      )}

      {/* Clear Filters Button - Always visible but inactive when no filters */}
      {onClearFilters && (
        <Button 
          variant="outline" 
          onClick={onClearFilters}
          disabled={!hasActiveFilters}
          className="w-full lg:w-auto"
        >
          <X className="mr-2 h-4 w-4" />
          Clear Filters
        </Button>
      )}
    </div>
  );
}