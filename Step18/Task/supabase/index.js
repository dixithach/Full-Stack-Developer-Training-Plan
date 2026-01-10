import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://cjkwtsrsqnxvaoirgamc.supabase.co';
const supabaseKey = 'sb_publishable_YWBSMS7Y_ET5_MmNCJxoTA_l2zI6LD-';

const supabase = createClient(supabaseUrl, supabaseKey);

async function testConnection() {
  const { data, error } = await supabase
    .from('documents')
    .select('*');

  if (error) {
    console.error('Error:', error);
  } else {
    console.log('Data:', data);
  }
}

testConnection();
