import { createClient } from '@supabase/supabase-js';

// 1. Paste your Supabase credentials here
const supabaseUrl = 'https://cjkwtsrsqnxvaoirgamc.supabase.co';
const supabaseKey = 'sb_publishable_YWBSMS7Y_ET5_MmNCJxoTA_l2zI6LD-';

// 2. Create Supabase client
const supabase = createClient(supabaseUrl, supabaseKey);

// 3. Function to fetch recipes
async function fetchRecipes() {
  const { data, error } = await supabase
    .from('family_recipes')
    .select('*');

  if (error) {
    console.error('Error fetching recipes:', error);
    return;
  }

  console.log('Recipes from Supabase:');
  console.log(data);
}

// 4. Call the function
fetchRecipes();
