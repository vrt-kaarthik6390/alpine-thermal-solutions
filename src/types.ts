/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type PageId = 'home' | 'about' | 'products' | 'gallery' | 'contact';

export interface ProductFeature {
  title: string;
  description: string;
}

export interface ProductSpec {
  property: string;
  value: string;
}

export interface ProductItem {
  id: string;
  name: string;
  badge: string;
  subIntro: string;
  description: string;
  features: ProductFeature[];
  specs: ProductSpec[];
  applications: string[];
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
  details: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  imageSeed: string;
}
